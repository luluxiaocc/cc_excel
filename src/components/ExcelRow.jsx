import React from 'react';
import '../style/row.scss';
class ExcelRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  initRow() {
    let res = [];
    let {options:{titleTotal}} = this.props;
    for (let i = 1; i <= titleTotal; i++) {
      res.push(
        <li className="row-li" key={i}>
          {i}
        </li>
      );
    }
    return res;
  }
  render() {
    return <ul className="row">{this.initRow()}</ul>;
  }
}

export default ExcelRow;
