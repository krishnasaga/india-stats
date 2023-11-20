import React, { Suspense, useEffect, useRef } from "react";
import * as d3 from "d3";
import Plotly from "plotly.js-dist-min";

export const Chart = ({ id }) => {
  const devRef = useRef();

  useEffect(() => {
    var data = [
      {
        type: "scattergeo",
        mode: "markers",
        locations: ['India',"Delhi"],
        locationmode : 'country names',
      
        marker: {
          size: [20, 30, 15, 10],
          color: [10, 20, 40, 50],
          cmin: 0,
          cmax: 50,
          colorscale: "Greens",
          colorbar: {
            title: "Some rate",
            ticksuffix: "%",
            showticksuffix: "last",
          },
          line: {
            color: "black",
          },
        },
        name: "Road Accidents data",
      },
    ];

    var layout = {
      geo: {
        scope: "asia",
        resolution: 100,
      },
    };
    var config = {mapboxAccessToken: "pk.eyJ1IjoiYWRpdHlhdGhld2ViZGV2bG9wZXJzIiwiYSI6ImNsbnUzenNzYTBhY24yanRhcG5vbjkwcGYifQ.Zk-TrfPl6_XFibB3qBkXMA"};
    Plotly.newPlot(devRef.current, data, layout,config);
  }, []);

  return <div id={id || "1"} ref={devRef} />;
};

export default Chart;
