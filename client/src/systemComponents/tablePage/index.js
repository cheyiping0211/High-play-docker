import React from 'react';
import {Table} from 'antd';
import "./style.less"

class TablePage extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {selectedRows: []};
  }

  pageChange(currentPage){
    this.props.onPageChange(currentPage);
  }

  get columns(){
    let {columns, headers} = this.props;

    if(Array.isArray(columns) && columns.length > 0) return columns;

    return this.createColunms(headers) || [];
  }

  getColumnWidth(itemWidth, isPercent, totalWidth){
    return isPercent ? itemWidth / totalWidth * 100 + '%' : itemWidth;
  }

  createColunms(data){
    
    if(!Array.isArray(data) || !data.length)
        return [];

    let arr = data,
        newArr = [],
        totalWidth = arr.reduce((accumulator, item) => accumulator + parseInt(item.width), 0),
        tableWidth = this.props.width || 0,
        isPercent = tableWidth > totalWidth;

      this.scrollX = Math.max(totalWidth, this.clientWidth);

      arr.map((item,index) => {
          let { fieldName, key, width = 100, format } = item,
              clientwidth = this.getColumnWidth(width, isPercent, tableWidth),
              realWidth = isPercent ? width / totalWidth * this.scrollX : width,
              itemObj = {
              title: fieldName,
              dataIndex: key,
              key:key,
              width: clientwidth,
              render: (text, record) => {
                return this.getColums(text, record, format, clientwidth, realWidth);
              }
          };
          newArr.push(itemObj);
    });
    return newArr;
  }

  getColums(text, record, format){
    return text;
  }

  onRowListClick(record){
    if(typeof this.props.rowListData === "function")
    {
      this.props.rowListData(record);
    }
  }

  get rowSelection(){
    let {checkboxFlag} = this.props,
        {selectedRowKeys=[]} = this.state;

        if(checkboxFlag){
          return ({
            selectedRowKeys,
            onChange: this.onrowSelectChange.bind(this)
          })
        }
  }

  get clientWidth(){
    let recordTableEle = document.getElementsByClassName('recordTable');

      if(recordTableEle && recordTableEle[0]){
        return recordTableEle[0].clientWidth;
      }

    return 0;
  }

  render(){

    let {currentPage,total,headers} = this.props,
        pagination = total !== undefined ? {
          total: total,
          showQuickJumper: true,
          current: currentPage || 1,
          onChange: this.pageChange.bind(this),
          showTotal: (total) => {
            return `总计 ${total} 条`;
          },
        } : {},
        {dataSource, rowKey} = this.props,
        data = dataSource && dataSource.length ? dataSource : [];

    return (
      <div className="tablePage">
          <Table className="recordTable" headers={headers} rowSelection={this.rowSelection} scroll={{x: this.scrollX || false}} rowKey={rowKey}
            pagination={pagination} dataSource={data} columns={this.columns}/>
      </div>
    )}
}

export default TablePage