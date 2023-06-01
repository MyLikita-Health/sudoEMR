import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, CardHeader, Col, Input, Row, Table } from "reactstrap";
import { apiURL } from "../../../redux/actions";
import { _fetchApi2, _postApi, _deleteApi } from "../../../redux/actions/api";
import CustomButton from "../../comp/components/Button";
import TextInput from "../../comp/components/TextInput";
// import CheckBoxNormal from '../../theater/operation-notes/CheckBoxNormal'
import { _customNotify, _warningNotify } from "../../utils/helpers";

const groupByDesc = (list) => {
  let final = {};
  list.forEach((item) => {
    if (Object.keys(final).includes(item.description)) {
      final[item.description] = [...final[item.description], item.time];
    } else {
      final[item.description] = [item.time];
    }
  });

  return final;
};

function DrugFrequencySetup() {
  const [timing, setTiming] = useState([]);
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [selectedTiming, setSelectedTiming] = useState([]);
  const _ref = useRef()
  const getTiming = () => {
    _fetchApi2(
      `${apiURL()}/frequency-setup/get?query_type=hours`,
      (d) => {
        if (d && d.results) {
          setTiming(d.results);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const getFreqList = () => {
    _fetchApi2(
      `${apiURL()}/frequency-setup/get?query_type=list`,
      (d) => {
        if (d && d.results) {
          let ff = groupByDesc(d.results);
          setList(ff);
          //   setList(d.results)
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    getTiming();
    getFreqList();
  }, []);

  const resetForm = () => {
    setTitle("");
    setSelectedTiming([]);
  };

  const submit = () => {
    if (title.length) {
      _postApi(
        `${apiURL()}/frequency-setup/new`,
        {
          query_type: "new",
          title,
          selectedTiming,
        },
        (data) => {
          // console.log(data)
          getFreqList();
          resetForm();
          _customNotify("Drug Frequency Saved!");
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      _warningNotify("Please Frequency field is required");
      _ref.current.focus()
    }
  };

  const deleteFreq = (title, timing) => {
    _deleteApi(
      `${apiURL()}/frequency-setup/delete`,
      {
        query_type: "delete",
        title,
        selectedTiming: timing,
      },
      (data) => {
        getFreqList();
        resetForm();
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(()=>{
    _ref.current.focus()
  },[])
  return (
    <Card>
      <CardHeader>Setup Drug Frequency</CardHeader>
      <CardBody>
        <Row>
          <Col md={4} sm={12} xl={4}>
            <TextInput
              label="Frequency"
              _ref={_ref}
              value={title}
              required={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Row>
        {/* {JSON.stringify(selectedTiming)} */}
        <Row className="px-4">
          {timing.map((item, id) => {
            let itemSelected =
              selectedTiming.findIndex((i) => i.hour === item.hour) !== -1;
            return (
              <Col md={2} key={id} className="">
                <Input
                  type="checkbox"
                  id={`${id}-${item.hour}`}
                  // label={item.hour}
                  checked={itemSelected}
                  onChange={() => {
                    if (itemSelected) {
                      setSelectedTiming((p) =>
                        p.filter((a) => a.hour !== item.hour)
                      );
                    } else {
                      setSelectedTiming((p) => [
                        ...p,
                        {
                          hour: item.hour,
                          hourInt: moment(item.hour, "HH:mm").format("HH"),
                        },
                      ]);
                    }
                  }}
                />
                <label htmlFor={`${id}-${item.hour}`} className="">
                  {item.hour}
                </label>
              </Col>
            );
          })}
        </Row>

        <center>
          <CustomButton className="px-4" onClick={submit}>
            Save
          </CustomButton>
        </center>
      </CardBody>

      <Table size="sm" bordered>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Description</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(list)} */}
          {Object.keys(list).map((sch, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{sch}</td>
              <td>{list[sch].join(", ")}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteFreq(sch, list[sch])}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default DrugFrequencySetup;
