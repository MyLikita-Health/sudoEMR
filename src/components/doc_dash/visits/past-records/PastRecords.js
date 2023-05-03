import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useHistory, useLocation, useParams } from "react-router";
import { Card, Col, Row } from "reactstrap";
import useQuery from "../../../../hooks/useQuery";
import { apiURL } from "../../../../redux/actions";
import { _fetchApi2 } from "../../../../redux/actions/api";
import Loading from "../../../comp/components/Loading";
import ListMenuItem from "../../../comp/components/vertical-menu/ListMenuItem";
import VerticalMenu from "../../../comp/components/vertical-menu/VerticalMenu";
import DICOMList from "./DICOMList";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const RECORD_TYPES = [
  "Consultation",
  "Doctor",
  "Investigation",
  "Nursing Chart",
  "Physio",
  "Reports",
  "DICOM Images",
];

function PastRecords() {
  const location = useLocation();
  const { patientId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const query = useQuery();
  const view_type = query.get("view_type");
  const history = useHistory();

  useEffect(() => {
    updateQueryString(RECORD_TYPES[0]);
  }, []);

  useEffect(() => {
    setLoading(true);
    _fetchApi2(
      `${apiURL()}/get/image-files-1?patient_id=${patientId}&file_type=${view_type}`,
      (data) => {
        setLoading(false);
        let newArr = [];
        data.results.forEach((i) =>
          newArr.push({
            ...i,
            open: false,
            original: `${apiURL()}/${i.file_url}`,
            thumbnail: `${apiURL()}/${i.file_url}`,
          })
        );
        setData(newArr);
      },
      (err) => {
        setLoading(false);
      }
    );
  }, [patientId, view_type]);

  const updateQueryString = (item) => {
    let splittedRoute = location.pathname.split("?");
    let hasQueryString = splittedRoute.length > 1;
    let finalQs = null;
    if (hasQueryString) {
      let qsInd = splittedRoute.split("&&");
      let newQs = [];
      qsInd.slice(1).forEach((i) => {
        if (i.includes("view_type")) {
          let splittedVal = i.split("=");
          newQs.push(splittedVal[0], +"=" + item);
        } else {
          newQs.push(i);
        }
      });
      finalQs = newQs.join("&&");
    } else {
      finalQs = "?view_type=" + item;
      // item.split(' ').join('-')
    }

    return location.pathname + finalQs;
  };

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <button
        className={`btn btn-default btn-md`}
        onClick={() =>
          history.push(
            `/me/doctor/visit-preview/${patientId}?page_type=preview&visit_id=&section=disabled`
          )
        }
      >
        <span className="d-flex flex-direction-row align-items-center text-primary">
          <AiOutlineLeft className="mr-1" size={20} />
          Go Back
        </span>
      </button>
      <Row className="m-0 p-0">
        <Col md={3} className="p-0">
          <VerticalMenu title="Select Record Type">
            {RECORD_TYPES.map((item) => (
              <ListMenuItem
                route={updateQueryString(item)}
                active={view_type === item}
              >
                {item}
              </ListMenuItem>
            ))}
          </VerticalMenu>
          {/* <CollapsibleCard defaultOpen headerText="Select Record Type">
            {RECORD_TYPES.map((item) => (
              <div>{item}</div>
            ))}
          </CollapsibleCard> */}
        </Col>
        <Col md={9}>
          {/* {JSON.stringify(data)}================== */}
          <Card style={{ height: "90vh", overflow: "scroll" }} body>
            {view_type === "DICOM Images" ? (
              <DICOMList />
            ) : (
              <div>
                {loading && <Loading />}
                <PhotoProvider>
                  {data.map((item) => (
                    <PhotoView src={item.original}>
                      <img
                        src={item.thumbnail}
                        alt=""
                        style={{ width: "30%", height: "auto", margin: "2px" }}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>

                {!data.length && (
                  <center>
                    <h5>The patient has no data now, check back later</h5>
                  </center>
                )}
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default PastRecords;
