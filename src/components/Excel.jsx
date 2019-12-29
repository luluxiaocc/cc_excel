import React from 'react';
import '../style/excel.scss';
import ExcelColumn from './ExcelColumn';
import ExcelRow from './ExcelRow';
import ExcelCanvas from './ExcelCanvas';
class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        row: {
          titleTotal: 35
        },
        column: {
          titleTotal: 20
        }
        ,
        canvas: {}
      }
    };
  }
  render() {
    let { options } = this.state;
    return (
      <div className="excel">
        <nav className="excel-header">all</nav>
        <div className="excel-wrap">
          <ExcelColumn options={options.column} />
          <ExcelRow options={options.row} />
          <ExcelCanvas options={options} />
        </div>
      </div>
    );
  }
}

export default Excel;
