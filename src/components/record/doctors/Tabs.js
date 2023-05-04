import React, { useState } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import WaitingList from "./WaitingList";

const ListTabs = (props) => {
  // const { list=[] } = props
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div className="text-center">
        <ButtonGroup>
          <Button
            className="px-4"
            outline={activeTab !== "1"}
            onClick={() => toggle("1")}
            color="primary"
          >
            General
            <Badge color="primary">{props.waitingList.length}</Badge>
          </Button>
          <Button
            className="px-4"
            outline={activeTab !== "2"}
            onClick={() => toggle("2")}
            color="primary"
          >
            Specialist <Badge color="primary">{props.list ? props.list.length : "0"}</Badge>
          </Button>
        </ButtonGroup>
      </div>

      <WaitingList
        list={activeTab === "1" ? props.waitingList : props.list}
        loading={props.loading}
        type={activeTab === "1" ? "waiting" : "specialist"}
        undoPatientAssignment={props.undoPatientAssignment}
      />
    </div>
  );
};

export default ListTabs;
