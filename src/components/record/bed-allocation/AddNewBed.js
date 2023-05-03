import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, FormGroup, Input, CardTitle, Col } from "reactstrap";
import { apiURL, ipAddr } from "../../../redux/actions";
import { _fetchApi2, _postApi } from "../../../redux/actions/api";
import { getBeds } from "../../../redux/actions/records";
import AutoComplete from "../../comp/components/AutoComplete";
import CustomButton from "../../comp/components/Button";
import { _customNotify, _warningNotify } from "../../utils/helpers";

const AddNewBed = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    classType: "",
    bedName: "",
    price: "",
    noOfBeds: 1,
  });
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);

  const resetForm = () => {
    setForm({
      // classType: "",
      bedName: "",
      price: "",
      noOfBeds: 1,
    });
  };

  const getBedClasses = useCallback(() => {
    // alert('adsfasdf')
    _fetchApi2(
      `${apiURL()}/beds?query_type=classes&facilityId=${user.facilityId}`,
      (data) => {
        if (data && data.results) {
          setClasses(data.results);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [user.facilityId]);

  useEffect(() => {
    getBedClasses();
  }, [getBedClasses]);

  const onChange = ({ target }) => {
    setForm((p) => ({ ...p, [target.name]: target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(form)
    let data = {
      query_type: "newBed",
      classType: form.classType,
      price: form.price,
      bedName: form.bedName,
      noOfBeds: form.noOfBeds,
    };

    _postApi(
      `${apiURL()}/beds/new`,
      data,
      () => {
        setLoading(false);
        _customNotify("Bed successfully created!");
        resetForm();
        getBedClasses();
        dispatch(getBeds());
      },
      (err) => {
        setLoading(false);
        console.error(err);
        _warningNotify("Sorry, an error occured!");
      }
    );
  };

  return (
    <Card body>
      <CardTitle tag="h4" className="text-center">
        Add new bed
      </CardTitle>
      <Form onSubmit={onSubmit}>
        <div className="row">
          <Col md={6}>
            <AutoComplete
              label="Class Type"
              labelKey="class_type"
              labelClass="font-weight-normal"
              options={classes}
              onInputChange={(text) =>
                setForm((p) => ({ ...p, classType: text }))
              }
              onChange={(val) => {
                if (val.length) {
                  setForm((p) => ({ ...p, classType: val[0].class_type }));
                }
              }}
            />
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>Bed Name</label>
              <Input
                className="form-control"
                type="text"
                name="bedName"
                value={form.bedName}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>No. of beds</label>
              <Input
                className="form-control"
                type="number"
                name="noOfBeds"
                value={form.noOfBeds}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>Price per bed</label>
              <Input
                className="form-control"
                type="number"
                name="price"
                value={form.price}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
        </div>

        <center>
          <CustomButton loading={loading}>Submit</CustomButton>
        </center>
        {/* {JSON.stringify(ipAddr)} */}
      </Form>
    </Card>
  );
};

export default AddNewBed;
