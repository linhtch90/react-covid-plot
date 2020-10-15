import React from "react";
import "./Plot.css";
import { AreaChart, XAxis, YAxis, Area, Tooltip } from "recharts";

class Plot extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // handleData() {
  //   let data = this.props.data;
  //   let plotData = data.map((element, index, array) => {
  //     if (index > 0) {
  //       const container = {};
  //       container["Date"] = element.Date.slice(0, 10);
  //       container["NewCases"] = array[index].Cases - array[index - 1].Cases;
  //     }
  //   });
  //   return plotData;
  // }

  render() {
    let plotData = this.props.data;
    return (
      <div className="PlotContainer">
        <AreaChart
          width={1100}
          height={400}
          data={plotData}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis dataKey="Date" />
          <YAxis dataKey="Cases" />
          <Area dataKey="Cases" stroke="#5e35b1" fill="#9575cd" />
          <Tooltip />
        </AreaChart>
      </div>
    );
  }
}

export default Plot;
