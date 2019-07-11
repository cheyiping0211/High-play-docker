import React, { Component } from 'react';
import { shape, array, object } from 'prop-types';
import "./style.css"
export class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = { optionalArr: [], selectedKey: "", selectedArr: [], typeList: [] };
    }

    static propTypes = {
        propsData: shape({
            type: array,
            user: array
        }),
    };

    onOptional() {
        this.optional();
    }

    optional() {
        const { propsData } = this.props,
              { selectedArr } = this.state,
                optionalArr = [];

        Object.keys(propsData).forEach((key) => {
            optionalArr.push({
                'type': key
            })
        })

        if (Array.isArray(selectedArr) && selectedArr.length > 0) {
            let arr = [];
            for (let item of optionalArr) {
                if (selectedArr.find(v => v['type'] == item['type'])) {
                    continue;
                }
                arr.push(item);
            }
            if (selectedArr.find(v => !v['value'])) {
                arr = [];
            }

            this.setState({
                optionalArr: arr
            })

            return;
        }

        this.setState({ optionalArr })
    }

    async onSelectedType(item) {
        const { type } = item;

        await this.setState({
            selectedKey: type
        })

        this.onSetSeleted();
        this.onChangeTypeList(type);
    }

    onSetSeleted(type = '', value = '') {
        const { selectedKey, selectedArr } = this.state,
                rightType = type && selectedKey != undefined ? type : selectedKey;

        selectedArr.push({
            'type': rightType,
            'value': value
        })

        this.onChangeReplace(rightType, value);

        this.setState({
            optionalArr: [],
        })
    }

    onSelected(item, type) {

        const rightValue = item.name ? item.name : item;

        this.onSetSeleted(type, rightValue);
        this.onChangeTypeList(rightValue);
    }

    onChangeTypeList(typeName) {

        const { propsData } = this.props;

        Object.keys(propsData).forEach((key) => {

            if (key == typeName) {
                propsData[key].type = typeName;
                this.setState({ typeList: propsData[key], })
            }
        });
    }

    onChangeValue(type, event) {

        this.onSearchFor(type, event.target.value);
        this.onChangeReplace(type, event.target.value);
    }

    onChangeReplace(type = '', value = '') {
        const { selectedArr } = this.state,
            attrObject = [],
            rightArr = [];

        for (let i = 0; i < selectedArr.length; i++) {
            if (!attrObject[selectedArr[i].type]) {
                rightArr.push(selectedArr[i]);
                attrObject[selectedArr[i].type] = true;
            }
        }

        this.setState({
            selectedArr: rightArr.map((item, index) => item.type == type ? { ...item, value: value } : item),
        })
    }

    onSearchFor(type = '', value = '') {
        if (!value) return;

        const { propsData } = this.props,
            typeList = propsData[type].filter(item => {

                if (item.name) {
                    return item.name.match(value)
                } else {
                    return item.match(value)
                }
            });

        this.setState({ typeList })
    }

    onSubclass(type) {
        this.onChangeTypeList(type);
    }

    onPropsSearch() {
        const { selectedArr } = this.state;

        if (selectedArr.length) {
            alert(JSON.stringify(selectedArr));
        } else {
            alert('无内容');
        }
    }

    onCloseSeleted(index) {
        const { selectedArr } = this.state;

        selectedArr.splice(index, 1);

        this.setState({
            selectedArr
        })
    }

    render() {
        const { onOptional } = this,
            { optionalArr, typeList, selectedArr } = this.state;

        return (
            <div>
                <ul className="search" onClick={onOptional.bind(this)}>
                    {
                        Array.isArray(selectedArr) && selectedArr.length > 0 ?
                            selectedArr.map((item, index) =>
                                <li key={index}>
                                    <span className="type">{item.type}</span>
                                    <input type="text" placeholder="-请选择-" onClick={this.onSubclass.bind(this, item.type)} value={item.value} onChange={this.onChangeValue.bind(this, item.type)} />
                                    <span className="close" onClick={this.onCloseSeleted.bind(this, index)}>{item.value ? 'X' : null}</span>
                                </li>
                            )
                            : null
                    }
                </ul>
                <ul>
                    {Array.isArray(optionalArr) && optionalArr.length > 0 ?
                        optionalArr.map((item, index) => {
                            return <li key={index} onClick={this.onSelectedType.bind(this, item)}>{item.type}</li>
                        }) : null
                    }
                </ul>
                <ul>
                    {Array.isArray(typeList) && typeList.length > 0 ?
                        typeList.map((item, index) => {
                            return <li key={index} onClick={this.onSelected.bind(this, item, typeList.type)}>{item.name ? item.name : item}</li>
                        }) : null
                    }
                </ul>
                <button onClick={this.onPropsSearch.bind(this)}>action</button>
            </div>
        )
    }
}

export default SearchInput;