import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import WithSubnavigation from "../components/layout";
import { Slide } from "react-reveal";
import useSWR from "swr";

const Title = React.lazy(() => import("../components/Title"));
const BarChart = React.lazy(() =>
  import("../components/charts/HorizontalBarChart")
);
const Total = React.lazy(() => import("../components/Total"));
const Map = React.lazy(() => import("../components/charts/Map"));

export default function RoadAccidents() {
  const isSSR = typeof window === "undefined";
  const { data, error, isLoading } = useSWR("http://localhost:8080/", (url) => {
    return fetch(url, {
      mode: "cors",
    }).then((response) => response.json());
  });

  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <WithSubnavigation>
        <div>
          <Slide bottom>
            <Title />
          </Slide>
          <Slide bottom>
            <Total />
          </Slide>
          <Grid>
            <GridItem colStart={[4]} colEnd={[11]}>
              {!isSSR && data ? (
                <Suspense fallback={<Box h={"100px"} w={"100%"} />}>
                  <Slide bottom>
                    <BarChart
                      id="1"
                      data={[
                        {
                          type: "bar",
                          x: [100, 200, 400, 500, 600, 800],
                          orientation: "h",
                          ...data,
                        },
                      ]}
                    />
                  </Slide>
                </Suspense>
              ) : (
                <Box h={"100px"} w={"100%"} />
              )}
            </GridItem>
          </Grid>
          <Grid>
            <GridItem colStart={[3]} colEnd={[11]}>
              {!isSSR ? (
                <Suspense fallback={<Box h={"100px"} w={"100%"} />}>
                  <Slide bottom>
                    <Map id={"2"} />
                  </Slide>
                </Suspense>
              ) : (
                <Box h={"100px"} w={"100%"} />
              )}
            </GridItem>
          </Grid>
        </div>
      </WithSubnavigation>
    </ThemeProvider>
  );
}
