import React from 'react';
import * as d3 from 'd3';

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            margin: { top: 37, right: 100, bottom: 37, left: 60 },
            outWidth: 960,
            outHeight: 464,
            item_height: 120, //每个小折线图的高度
            colors: [ //每个小折线图的主色
                '#FE2668', '#6702FF', '#0075FF'
            ],
            item_color: [
                'linear-gradient(90deg,rgba(211,30,197,1) 0%,rgba(255,0,61,1) 100%)',
                'linear-gradient(221deg,rgba(143,30,211,1) 0%,rgba(101,0,255,1) 98%)',
                'linear-gradient(270deg,rgba(30,100,211,1) 0%,rgba(0,130,255,1) 100%)'
            ],
            linearGradientColor: [
                { start: 'rgba(211,30,197,1)', end: 'rgba(255,0,61,1)' },
                { start: 'rgba(143,30,211,1)', end: 'rgba(101,0,255,1)' },
                { start: 'rgba(30,100,211,1)', end: 'rgba(0,130,255,1)' },
            ]
        }
        this.area_generator = this.area_generator.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    componentDidMount() {
        this.createSvg();
        this.props.data && this.generateLine(this.props.data);
    }

    // 创建画布
    createSvg() {
        const { margin, outWidth, outHeight, colors, linearGradientColor } = this.state;
        const { data } = this.props;
        const width = outWidth - margin.left - margin.right;
        const height = outHeight - margin.top - margin.bottom;

        this.svg = d3.select("#lineChart")
            .append("svg")
            .attr("width", outWidth)
            .attr("height", outHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // 提示框
        d3.select("#lineChart")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip");
        // x轴
        this.svg.append('g')
            .attr('class', 'x-axis')
            .attr("transform", "translate(0," + height + ")");
        data && Object.keys(data).forEach((key, index) => {
            const region = this.svg.append('g').attr('class', key).attr("transform", "translate( 0," + (height / 3 * index + 10) + ")")
            // 渐变
            let linearGradient = region.append('defs')
                .append("linearGradient")
                .attr("id", key)
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
            linearGradient.append("stop")
                .attr("offset", "0%")
                .style("stop-color", linearGradientColor[index].start);
            linearGradient.append("stop")
                .attr("offset", "100%")
                .style("stop-color", linearGradientColor[index].end);

            // y轴
            region.append('g').attr('class', 'y-axis')
            region.append("path").style("stroke", "url(#" + linearGradient.attr("id") + ")").attr('class', 'line')
            region.append("path").style("fill", colors[index]).attr('class', 'line_bg')
            region.append('g').attr('class', 'dot')

        })
    }

    get lineAttr() {

        const { margin, outWidth, outHeight } = this.state;
        const width = outWidth - margin.left - margin.right;
        const height = outHeight - margin.top - margin.bottom;
        // 坐标轴 x dom
        const axisX = d3.select(`#lineChart`).select('.x-axis');

        const axisY = (key) => d3.select(`#lineChart .${key}`).selectAll('.y-axis');

        const line_bg = (key) => d3.select(`#lineChart .${key}`).selectAll('.line_bg');
        const line = (key) => d3.select(`#lineChart .${key}`).selectAll('.line');
        // 渐变
        const linearGradient = (key) => d3.select(`#lineChart .${key} defs`);
        const scaleY = function (data, height) {
            const arr = d3.extent(data, function (d) { return d.value; })
            return d3.scaleLinear()
                .domain(arr)
                .range([height, 0]);

        }
        const scaleX = function (data, width) {
            return d3.scaleTime()
                .domain(d3.extent(data, function (d) { return new Date(d.time) }))
                .range([0, width]);
        }

        // //显示数据 dom

        return {
            axisX, axisY, width, height, scaleY, scaleX, line_bg, line,
            ...this.state
        }
    }

    componentDidUpdate(nextProps) {
        this.generateLine(nextProps.data);
    }
    //每个区域 title
    createTitle(key, index) {
        const { margin, item_color, height } = this.lineAttr;
        d3.select("#lineChart")
            .append("div")
            .attr('class', `item-title ${key}`)
            .html(`title ${key}`)
            .style("left", margin.left + "px")
            .style("top", (height / 3 * index + margin.top + 3) + "px")
            .style("background", item_color[index]);
    }
    // Y轴
    lineAxisY(data, key) {
        const { width, item_height, scaleY, axisY } = this.lineAttr;
        axisY(key).call(d3.axisRight(scaleY(data[key], item_height))
            .ticks(4)
            .tickSize(width))
            .call(g => g.select(".domain")
                .remove())
            .call(g => g.selectAll(".tick:not(:first-of-type) line")
                .attr("stroke-opacity", 0.5)
                .attr("stroke-dasharray", "4,4"))
            .call(g => g.selectAll(".tick text")
                .attr("x", -40)
                .attr("dy", 4))
    }
    // X轴
    lineAxisX(data) {
        const { width, scaleX, axisX } = this.lineAttr;
        axisX.call(d3.axisBottom(scaleX(data, width)));
    }
    //圈
    lineCircle(data, key, index) {
        const { onMouseOver, onMouseMove, onMouseLeave } = this;
        const { scaleX, scaleY, width, item_height, colors } = this.lineAttr;
        const nx = scaleX(data, width)
        const ny = scaleY(data, item_height)

        const lineCircle = d3.select(`#lineChart .${key} .dot`).selectAll("circle").data(data)

        lineCircle.enter()
            .append("circle")
            .attr("cx", function (d) { return nx(new Date(d.time)) })
            .attr("cy", function (d) { return ny(d.value) })
            .attr("r", 2)
            .attr("stroke", colors[index])
            .on("mouseover", onMouseOver())
            .on("mousemove", onMouseMove(index))
            .on("mouseleave", onMouseLeave())

        lineCircle
            .attr("cx", function (d) { return nx(new Date(d.time)) })
            .attr("cy", function (d) { return ny(d.value) })
            .attr("r", 2)
            .attr("stroke", colors[index])
            .on("mouseover", onMouseOver())
            .on("mousemove", onMouseMove(index))
            .on("mouseleave", onMouseLeave())

        lineCircle.exit().remove();
    }

    generateLine(data) {
        const { width, scaleX, scaleY, item_height, line, line_bg } = this.lineAttr;
        const { line_generator, area_generator, } = this;

        Object.keys(data).forEach((key, index) => {

            const lineScaleX = scaleX(data[key], width);
            const lineScaleY = scaleY(data[key], item_height);
            if (index === 0) {
                this.lineAxisX(data[key]);
            }
            this.lineAxisY(data, key);
            this.createTitle(key, index);
            this.lineCircle(data[key], key, index);

            line(key).attr("d", line_generator(lineScaleX, lineScaleY)(data[key]))
            line_bg(key).attr("d", area_generator(lineScaleX, lineScaleY)(data[key]))

        })
    }

    // 折线
    line_generator(nx, ny) {
        return d3.line()
            .x(function (d) { return nx(new Date(d.time)) })
            .y(function (d) { return ny(d.value) })
            .curve(d3.curveMonotoneX)
    }
    //折线背景
    area_generator(nx, ny) {
        const { item_height } = this.state;
        return d3.area()
            .x(function (d) { return nx(new Date(d.time)) })
            .y0(item_height)
            .y1(function (d) { return ny(d.value) })
            .curve(d3.curveMonotoneX)
    }
    // tooltip hover
    onMouseMove(index) {
        const { item_color, outHeight, margin } = this.state;
        let height = outHeight - margin.top - margin.bottom,
            tip = d3.select("#lineChart .tooltip")

        return function (d) {
            tip.style("background", item_color[index])
                .html(d.value + '人次')
                .style("left", (d3.mouse(this)[0] + + 40) + "px")
                .style("top", (d3.mouse(this)[1] + height / 3 * index) + "px")
        }
    }
    onMouseOver() {
        let tip = d3.select("#lineChart .tooltip")
        return function (d) {
            tip.style("opacity", 1)
        }
    }
    onMouseLeave() {
        let tip = d3.select("#lineChart .tooltip")
        return function (d) {
            tip.style("opacity", 0)
        }
    }

    render() {
        return (
            <div className="lineChart" id="lineChart"></div>
        )
    }
}
export default Line;