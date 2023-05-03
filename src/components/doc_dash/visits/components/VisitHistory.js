import moment from "moment";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import CollapsibleCard from "../../../CollapsibleCard.js";

function VisitHistory({
  visitDays = [],
  setQueryDate = (f) => f,
  queryDate = {},
  title = "Encounters",
  height = "80vh",
  loading = false,
}) {
  return (
    <CollapsibleCard headerText={title} fixed={true} defaultOpen body="p-0">
      {loading && <p>Please wait...</p>}
      <ListGroup style={{ height, overflow: "scroll" }}>
        {visitDays.map((item, k) => {
          let isActive = queryDate.date === item && queryDate.type === title;
          return (
            <ListGroupItem
              key={k}
              color={isActive ? "primary" : ""}
              style={{ cursor: "pointer" }}
              className="px-0 text-center"
              onClick={() => {
                // alert(item)
                setQueryDate({ date: item, type: title });
                // query.append('date', item)
                // query.toString()
                // if (queryDate) {
                // addQuery('queryDate', item)
                // history.push({
                //   pathname: location.pathname,
                //   search: `${search}&query_date=${item}`,
                // })
                // } else {
                //   removeQuery('queryDate')
                //   addQuery('queryDate', item)

                //   // let searchParams = new URLSearchParams(location.search)
                //   // searchParams.delete('queryDate')
                //   // history.push({
                //   //   pathname: location.pathname,
                //   //   search: `${search}&h=${item}`,
                //   // })
                //   // query.set('queryDate', item)
                // }
              }}
            >
              {moment(item).format("DD/MM/YYYY")}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </CollapsibleCard>
  );
}

export default VisitHistory;
