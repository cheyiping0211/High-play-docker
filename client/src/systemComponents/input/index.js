import React, { useState } from "react";
import "./style.less"
const Input = props => {
    const [typeData, setTypeData] = useState([{ id: 1, name: 'actions' }, { id: 2, name: 'user' }]);
    const [selectFlag, setSelectFlag] = useState(false);
    const [initData, setInitData] = useState({ types: [0, 1], users: [{ id: "1", name: "name1" }, { id: "2", name: "name2" }] });
    const [userData, setUserData] = useState([]);
    const [seletedData, setSelectedData] = useState([]);

    const onChecked = () => {
        setSelectFlag(true);
    }

    const onChangeValue = (e) => {
        filteruserData(e.target.value);
    }

    const filteruserData = (filterName) => {
        if (!filterName) {
            setUserData([]);
            return;
        };

        if (filterName == '@') {
            filterName = 'name';
        }

        let { users } = initData,
            userData = users.filter(item => {
                return item.name.match(filterName)
            });

        setUserData(userData);
    }

    const onSelected = (item) => {
        setSelectFlag(false);
        setSelectedData([item]);

    }

    const liGenerate = (list) => {

        if (Array.isArray(list)) {
            return list.map((item, index) => {
                return <li key={index} onClick={onSelected.bind(this, item)}>{item.name}</li>;
            })
        }
    }

    return (
        <div className="input">
            <input onChange={onChangeValue} onClick={onChecked} className="selector">
            </input>
            {selectFlag ?
                <ul>
                    {liGenerate(typeData)}
                </ul>
                : null
            }
            {Array.isArray(userData) && userData.length > 0 ?
                <ul>
                    {liGenerate(userData)}
                </ul>
                : null
            }
            {Array.isArray(seletedData) && seletedData.length > 0 ?
                <ul className="selected">
                    {liGenerate(seletedData)}
                </ul>
                : null
            }
        </div>
    )
}

export default Input;