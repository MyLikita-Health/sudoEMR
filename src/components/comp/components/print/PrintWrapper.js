import React from "react";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../../../redux/actions/api";

function PrintWrapper(props) {
  const facilityInfo = useSelector((state) => state.facility.info);
  const user = useSelector((state) => state.auth.user);
  const { footer = true } = props;
  return (
    <>
      <style>
        {`@media print {
              table {
                font-size: 75%;
                table-layout: fixed;
                width: 100%;
              }
              
              table {
                border-collapse: collapse;
                border-spacing: 2px;
              }
              
              th,
              td {
                border-width: 1px;
                padding: 0.5em;
                position: relative;
                text-align: left;
              }
              
              th,
                td {
                    border-radius: 0.25em;
                    border-style: solid;
                }
                
                th {
                    background: #EEE;
                    border-color: #BBB;
                }
                
                 {
                    border-color: #DDD;
                }
                .text-right {
                    text-align: right;
                }
                .text-center {
                    text-align: center;
                }
                .font-weight-bold {
                    font-weight: bold;
                }
                .print-start{
                    margin: 2em;
                    margin-top: 4em;
                }
                .print-only{
                  display: block;
                }
                th, td .print-only{
                  display: table-cell;
                }
                .no-print{
                  display: none;
                }
                
              .image{
                height: 5rem;
                width: 6rem;
                align-items: center;
                align-self: center;
                margin-right: 2rem
              }
            }

            @media screen {
              .print-only{
                display: none;
              } 
              
              .no-print{
                display: block;
              } 
              th, td .no-print{
                display: table-cell;
              } 
           }   
          `}
      </style>

      <div className="print-start">
        <div className="print-only">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              {" "}
              <img src={getImageUrl(user.image)} alt="logo" className="image" />
            </div>
            <div>
              {" "}
              <h3 className="text-center" style={{ margin: 0 }}>
                {facilityInfo.printTitle}
              </h3>
              <h4 className="text-center" style={{ margin: 0 }}>
                {facilityInfo.printSubtitle1}
              </h4>
              <h4 className="text-center" style={{ margin: 0 }}>
                {facilityInfo.printSubtitle2}
              </h4>
              <h5 className="text-center" style={{ marginTop: 3 }}>
                {props.title}
              </h5>
            </div>
          </div>

          {/* <img src={getImageUrl(user.image)} alt="logo" className="image" /> */}
        </div>
        {/* {JSON.stringify(facilityInfo)} */}
        {props.children}
        {footer && (
          <div
            className="print-only"
            style={{
              position: "fixed",
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="print-only">
              <b>Doctor's Name:</b>
              ..........................................................................................
            </div>
            <div
              style={{ textAlign: "right", marginLeft: 20 }}
              className="print-only"
            >
              <b>Date:</b>.........................
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PrintWrapper;
