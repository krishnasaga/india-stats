import React, { Suspense, useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

export const HorizontalBarChart = ({ id, data, layout }) => {
  const devRef = useRef();
  const barwidth = 50;
  useEffect(() => {
    Plotly.newPlot(devRef.current.id, data, {
      height: data[0].y.length * barwidth,
    });
  }, []);

  return (
    <div
      id={id || "1"}
      ref={devRef}
      height={`${data[0].y.length * barwidth}px`}
    />
  );
};

export default HorizontalBarChart;
