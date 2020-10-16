import React from "react";
import "./Plot.css";
import { AreaChart, XAxis, YAxis, Area, Tooltip, Label } from "recharts";

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
            bottom: 20,
            left: 30,
          }}
        >
        <XAxis dataKey="Date">
          <Label value="Date" offset={0} position="bottom"/>
        </XAxis>
          <YAxis dataKey="Cases" label={{ value: 'People', angle: -90, position: 'left', offset: 15}} />
          <Area dataKey="Cases" stroke="#f4511e" fill="#ffab91" />
          <Tooltip />
        </AreaChart>
      </div>
    );
  }
}

export default Plot;
