import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import moment from "moment";
import DaterangeSelector from "../comp/components/DaterangeSelector";
// import MyResponsiveBar from '../pharmacy/dashboard/Charts';
import { apiURL } from "../../redux/actions";
import { useCallback } from "react";
// import ChartComponent from "../pharmacy/dashboard/ChartComponent";
import { useSelector } from "react-redux";

function Analytics() {
  const user = useSelector((state) => state.auth.user);
  const startOfMonth = moment()
    .startOf("month")
    .format("YYYY-MM-DD");
  const endOfMonth = moment()
    .endOf("month")
    .format("YYYY-MM-DD");

  const [range, setRange] = useState({
    from: startOfMonth,
    to: endOfMonth,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [, setFastSelling] = useState([]);
  // const [profit, setProfit] = useState([]);

  const [, setbestSellingStaff] = useState([]);

  const fetchBestSellingStaff = useCallback(
    () => {
      fetch(
        `${apiURL()}/summary/sales/staff/${range.from}/${range.to}/${
          user.facilityId
        }`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setbestSellingStaff(data.results);
            if (data.results.length > 10) {
              // setLayout('horizontal');
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [range.from, range.to, user.facilityId]
  );

  const getFastSellingItems = useCallback(
    () => {
      fetch(
        `${apiURL()}/drugs/totalsold/${range.from}/${range.to}/${
          user.facilityId
        }`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setFastSelling(data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [range.from, range.to, user.facilityId]
  );

  // const getProfitableItems = useCallback(
  //   () => {
  //     fetch(
  //       `${apiURL()}/analytics/profit/${range.from}/${range.to}/${
  //         user.facilityId
  //       }`,
  //     )
  //       .then((raw) => raw.json())
  //       .then((data) => {
  //         if (data.success) {
  //           setProfit(data.results);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   [range.from, range.to, user.facilityId],
  // );

  useEffect(
    () => {
      getFastSellingItems();
      // getProfitableItems();
      fetchBestSellingStaff();
    },
    [
      getFastSellingItems,
      // getProfitableItems,
      fetchBestSellingStaff,
    ]
  );

  return (
    <Card>
      <CardHeader className="text-center" tag="h5">
        Account Analytics
      </CardHeader>

      <CardBody>
        <DaterangeSelector
          from={range.from}
          to={range.to}
          handleChange={handleChange}
        />

        {/* <MyResponsiveBar title="Fast Selling Items" dateInfo={range} /> */}
        {/* <ChartComponent
          title="Fast Selling Items"
          xAxis="quantity"
          xLabel="Quantity Sold"
          yAxis="drug"
          yLabel="Drug"
          data={fastSelling}
          dateInfo={range}
        />

        <ChartComponent
          title="Best Selling Staff"
          xAxis="amount"
          xLabel="Amount Sold"
          yAxis="staff"
          yLabel="Staff"
          data={bestSellingStaff}
          dateInfo={range}
        /> */}

        {/* <center>
          <Button color="danger" className="pl-5 pr-5 mt-2">
            <FaPrint size="20" /> Print
          </Button>
        </center> */}
      </CardBody>
    </Card>
  );
}

export default Analytics;
