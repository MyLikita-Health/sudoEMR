import React from "react";
import { View } from "@react-pdf/renderer";
import TableWithRangePDFView from "./table-with-range-view";
import InputResultPDFView from "./input-result-view";
import MicrobiologyResultPDFView from "./microbiology-result-view";
import MacroscopyResultPDFView from "./macroscopy-result-view";
import WidalResultPDFView from "./widal-result-view";
import PathologistCommentPDFView from "./pathologist-comment";
// import Signature from "./signature";

function LabResultViewPDF({
  inputLabs = [],
  microbiology = [],
  tabledLabs = {},
  tabledLabsList = [],
  hoWidalLabs = {},
  hoWidalLabsList = [],
  macroscopyList = [],
  data,
}) {
  //   let head = Object.keys(data)[0];
  //   // let department = data[head].test_group;
  //   let requestDate = data[head][0].created_at;
  //   let reportDate = data[head][0].result_at;
  //   let result_by = data[head][0].result_by;

  return (
    <View>
      {inputLabs.length
        ? inputLabs.map((item, i) => <InputResultPDFView key={i} item={item} />)
        : null}

      {microbiology.length
        ? microbiology.map((item, i) => (
            <MicrobiologyResultPDFView key={i} item={item} />
          ))
        : null}

      {tabledLabsList && tabledLabsList.length ? (
        <TableWithRangePDFView list={tabledLabs} />
      ) : null}

      {hoWidalLabsList && hoWidalLabsList.length ? (
        <WidalResultPDFView
          list={hoWidalLabs}
          // list={{ [tabledLabs[0].group_head]: tabledLabs }}
        />
      ) : null}

      {macroscopyList && macroscopyList.length ? 
        macroscopyList.map((item, i) => (
        <MacroscopyResultPDFView key={i} item={item} /> 
        )) : null}

      <PathologistCommentPDFView />
      {/* <Signature result_by={result_by} /> */}
    </View>
  );
}

export default LabResultViewPDF;
