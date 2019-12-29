import React from 'react';
import '../style/canvas.scss';
class ExcelCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowList: []
    };
  }
  // 绘制基本的线路
  drawBase(ctx, c, r) {
    ctx.translate(0.5,0.5);
    ctx.strokeStyle = '#D8DADE'; // 线的颜色
    ctx.lineWidth = '.5'; // 线的粗细
    for (let i = 1; i < c; i++) {
      ctx.moveTo(100 * i, 0);
      ctx.lineTo(100 * i, r * 23);
      ctx.stroke(); // 描线
    }
    for (let i = 1; i < r; i++) {
      ctx.moveTo(0, 23 * i);
      ctx.lineTo(100 * c, 23 * i);
      ctx.stroke(); // 描线
    }
  }
  // 绘制宽高
  initHW(ctx, canvas) {
    let {
      options: { row, column }
    } = this.props;
    canvas.width = column.titleTotal * 100;
    canvas.height = row.titleTotal * 23;
    this.drawBase(ctx, column.titleTotal, row.titleTotal);
  }
  // 初始化画板数据
  initCanvas() {
    let canvas = this.refs['cc-canvas'];
    let ctx = canvas.getContext('2d');
    this.initHW(ctx, canvas);
  }
  componentDidMount() {
    this.initCanvas();
  }
  render() {
    return (
      <div className='canvas'>
        <canvas id="cc-canvas" ref="cc-canvas">
          ie9以上 才会支持, 请升级浏览器版本再试.
        </canvas>
      </div>
    );
  }
}

export default ExcelCanvas;
