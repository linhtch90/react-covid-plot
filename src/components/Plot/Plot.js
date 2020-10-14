import React from "react";
import './Plot.css';
import { VictoryBar } from "victory";

export default function Plot() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
    return (
        <div className="PlotContainer">
          <VictoryBar
      data={data}
      // data accessor for x values
      x="quarter"
      // data accessor for y values
      y="earnings"
    />
        </div>
    
  );
}
