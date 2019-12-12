import React, { PureComponent } from "react"
import * as d3 from 'd3'


class StatisticsStatus extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            margin: { top: 10, right: 10, bottom: 10, left: 10 },
            outWidth: 160,
            outHeight: 160,

            picChartName: 'test',
            // data: { name: '噪音', unit: 'dB', value: 67.7, max_value: 100.0 },
            data: { value: 67.7, max_value: 100 },
            color: { start: 'rgba(103,2,255,1)', end: 'rgba(158,45,226,1)', main: '#8416DF' }
        }
    }
    createSvg() {
        const { picChartName, margin, data, outWidth, outHeight, color } = this.state;
        const width = outWidth - margin.left - margin.right;
        const height = outHeight - margin.top - margin.bottom;
        let svg = d3.select(`#${picChartName}`)
            .attr("width", outWidth)
            .attr("height", outHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



        var radius = Math.min(width, height) / 2 - margin
        const key = function (d) { console.log('key', d); return d; };

        // Create dummy data
        // var data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

        const pie = d3
            .pie()
            .value(function (d) { console.log('pie', d); return d.value; })
            .padAngle(0.02)
            .sort(null);


        const arc = d3
            .arc()
            .innerRadius(radius * 0.9 - 15)
            .outerRadius(radius - 10)
            .cornerRadius(5);
        var path = svg.selectAll('path')
            .data(pie(data), key);

        path
            .transition()
            .duration(800)
            .attrTween('d', arcTween);
        path
            .enter()
            .append('path')
            .each(function (d, i) {
                const narc = findNeighborArc(i, data0, data1, key);
                if (narc) {
                    this._current = narc;
                    this._previous = narc;
                } else {
                    this._current = d;
                }
            })
        function arcTween(d) {
            const i = d3.interpolate(this._current, d);
            this._current = i(0);
            return function (t) {
                return arc(i(t));
            };
        }

    }

    get attr() {
        const { margin, outWidth, outHeight } = this.state;
        const width = outWidth - margin.left - margin.right;
        const height = outHeight - margin.top - margin.bottom;
        const radius = Math.min(width, height) / 2;
        var pie = d3.pie()
            .value(function (d) { return d.value; })
            .sort(null);

        var arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 20);
        return {
            width, height, pie,
            ...this.state
        }
    }


    componentDidMount() {
        this.createSvg()
    }
    render() {
        const { picChartName, data } = this.state;
        return (
            <div className={`item  `}>
                <svg id={picChartName}></svg>
            </div>
        )
    }
}

export default StatisticsStatus