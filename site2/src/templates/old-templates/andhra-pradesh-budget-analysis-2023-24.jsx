import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  List,
  ListItem,
  SimpleGrid,
  ThemeProvider,
  theme,
  Button,
} from "@chakra-ui/react";
import WithSubnavigation from "../../components/layout";
import { Slide } from "react-reveal";
import useSWR from "swr";
import SingleStat from "../../components/charts/SingleStat";
import SingleStatList from "../../components/charts/SingleStatsGrid";
import { BrowserOnly } from "../../components/BrowserOnly";

const Title = React.lazy(() => import("../../components/Title"));
const HorizontalBarChart = React.lazy(() =>
  import("../../components/charts/HorizontalBarChart")
);

const BarChart = React.lazy(() => import("../../components/charts/BarChart"));

const Total = React.lazy(() => import("../../components/Total"));
const Map = React.lazy(() => import("../../components/charts/Map"));

export default function BudgetAnalysis({ pageContext,...pros }) {
  const { title } = pageContext;
console.log("test context",pageContext,pros)
  return (
    <WithSubnavigation>
      <Box h={"calc(100vh - 70px)"}>
        <Box my={"64px"}>
          <Heading textAlign={"center"} size={"4xl"}>
            {title}
          </Heading>
        </Box>
        <Box m={"64px"}>
          <SingleStat
            value={1449501}
            color={"#05445E"}
            prefix="₹"
            unit="Cr"
            title={"Gross State Domestic Product"}
          />
        </Box>
        <BrowserOnly>
          <BarChart
            height={500}
            data={[
              {
                y: [
                  134761, 141977, 157386, 178028, 181829, 194994, 208273,
                  223465, 235930, 250282,
                ],
                x: new Array(10)
                  .fill(1)
                  .map((data, index) => `${2004 + index}-${2004 + index + 1}`),
              },
            ]}
          />
        </BrowserOnly>
      </Box>
      <Button>H</Button>
      <Box h={"100vh"}>
        <Heading size={"xl"} textAlign={"center"}>
          Budget Highlights
        </Heading>

        <SimpleGrid
          templateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap={"32px"}
          m={"32px"}
        >
          <SingleStatList
            size={2}
            data={[
              {
                value: 260868,
                prefix: "₹",
                unit: "cr",
                title: "Expenditure (excluding debt repayment)",
                description:
                  "Expenditure (excluding debt repayment) in 2023-24 is estimated to be Rs 2,60,868 crore, an increase of 16% over the revised estimates of 2022-23.  In addition, debt of Rs 18,411 crore will be repaid by the state.",
              },
              {
                value: 206280,
                prefix: "₹",
                unit: "cr",
                title: "Receipts (excluding borrowings)",
                description:
                  "Receipts (excluding borrowings) for 2023-24 are estimated to be Rs 2,06,280 crore, an increase of 17% as compared to the revised estimate of 2022-23.  In 2022-23, receipts (excluding borrowings) are estimated to decrease by 7.7% at the revised stage.",
              },
              {
                value: 22317,
                prefix: "₹",
                unit: "cr",
                title: "Revenue deficit",
                description:
                  "Revenue deficit in 2023-24 is estimated to be 1.5% of GSDP (Rs 22,317 crore), lower than the revised estimates for 2022-23 (2.2% of GSDP).  In 2022-23, the revenue deficit is expected to be higher than the budget estimate (1.3% of GSDP).",
              },
              {
                value: 54588,
                prefix: "₹",
                unit: "cr",
                title: "Fiscal deficit",
                description:
                  "for 2023-24 is targeted at 3.8% of GSDP (Rs 54,588 crore).   In 2022-23, as per the revised estimates, fiscal deficit is expected to be 3.6% of GSDP, same as the budget estimates for the year. ",
              },
            ]}
          />
        </SimpleGrid>
      </Box>
      <Heading size={"xl"} textAlign={"center"}>
        Policy Highlights
      </Heading>
      <SimpleGrid
        templateColumns={["1fr", "1fr", "1fr 1fr "]}
        gap={"32px"}
        m={"32px"}
      >
        <BrowserOnly>
          <SingleStatList
            size={2}
            data={[
              {
                title: "Loan waiver scheme",
                description:
                  "The YSR Aasara scheme for waiving outstanding bank loans of women self-help groups was launched in 2020.  Rs 6,700 crore has been allocated towards the scheme in 2023-24.",
              },
              {
                title: "Urban Development and Housing",
                description:
                  "Rs 9,381 crore will be allocated towards municipal administration and urban development department in 2023-24.  Under the Pedalandariki Illu Scheme, 30.21 lakh permanent houses will be provided by 2023, of which 4.4 lakh have been constructed so far.  Rs 5,600 crore has been allocated towards this scheme in 2023-24.",
              },
              {
                title: "Livestock insurance",
                description:
                  "The YSR Pasu Bhima Yojana has been approved which seeks to provide livestock insurance to farmers.  It will cover improved and indigenous as well as nondescript breeds of animals.",
              },
              {
                title: "Pension",
                description:
                  "The government seeks to increase the pension for various categories of pensioners in the state to Rs 3,000 in the coming years.  It has allocated Rs 21,434 crore towards YSR Pension Kanuka in 2023-24.",
              },
            ]}
          />
        </BrowserOnly>
      </SimpleGrid>

      <Heading size={"lg"} textAlign={"center"}>
        Andhra Pradesh GSDP and Sectoral Growth at Constant Prices
      </Heading>
      <SimpleGrid gridTemplateColumns={"1fr 1fr"}>
        <Box>
          <List gap={"32px"} spacing={"32px"}>
            <ListItem>
              GSDP: In 2022-23, Andhra Pradesh’s GSDP (at constant prices) is
              estimated to grow at 7%, same as the national GDP in 2022-23.
            </ListItem>
            <ListItem>
              Sectors: In 2022-23, services sector grew at 10% over a low base
              (see Figure 1). Manufacturing and agriculture sector grew at 5%
              each. In 2022-23, agriculture, manufacturing and services sectors
              are estimated to contribute 39%, 21%, and 40% to the economy,
              respectively (at current prices).
            </ListItem>
            <ListItem>
              Per capita GSDP: The per capita GSDP of Andhra Pradesh in 2021-22
              (at current prices) is estimated at Rs 2,19,518.
            </ListItem>
          </List>
        </Box>
        <BrowserOnly>
          <BarChart
            height={500}
            data={[
              {
                y: [6.6, 1.0, 6.5, 3.7],
                x: ["Agriculture", "Manufacturing", "Services", "GSDP"],
                name: "2019-20",
              },
              {
                y: [0.0, 7.2, -8.5, -2.5],
                name: "2020-21",
                x: ["Agriculture", "Manufacturing", "Services", "GSDP"],
              },
              {
                y: [10.8, 8.5, 10.1, 11.2],
                name: "2021-22",
                x: ["Agriculture", "Manufacturing", "Services", "GSDP"],
              },
              {
                y: [5.1, 5.0, 10.1, 7.0],
                name: "2022-23",
                x: ["Agriculture", "Manufacturing", "Services", "GSDP"],
              },
            ]}
          />
        </BrowserOnly>
      </SimpleGrid>
    </WithSubnavigation>
  );
}
