import React from 'react';
import '../style/column.scss';
import letterList from '../utils/dataList/letterList';
class ExcelColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letterList,
      titleList: [] // x轴的标题
    };
  }
  // 转换为16进制
  changeTo26(val) {
    let { letterList } = this.state;
    let res = '';
    while (val > 0) {
      res = letterList[val % 26] + res;
      val -= val % 26 ? val % 26 : 26;
      val = val / 26;
    }
    return res;
  }
  render() {
    const { options: { titleTotal }} = this.props;
    const { titleList } = this.state;
    for (let i = 1; i <= titleTotal; i++) {
      let item = this.changeTo26(i);
      titleList.push(item);
    }
    return (
      <ul className="column">
        {titleList.map(item => {
          return (
            <li className="column-li" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ExcelColumn;
