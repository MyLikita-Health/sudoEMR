import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "../../hooks";
import { apiURL } from "../../redux/actions";
// import { Button } from "reactstrap";
import { PATIENT_PASSPORT } from "../../redux/actions/actionTypes";
import { _fetchApi } from "../../redux/actions/api";
import "./uploadPassport.css";

export default function UploadPassportID() {
  const dispatch = useDispatch();
  const query = useQuery();
  const patient_id = query.get("patient_id");
  const [state, setState] = useState({
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    active: "edit",
  });

  const photoUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setState((p) => ({ ...p, file: file, imagePreviewUrl: reader.result }));
    };
    reader.readAsDataURL(file);
    dispatch({
      type: PATIENT_PASSPORT,
      payload: file,
    });
  };
  //   const editName = (e) => {
  //     const name = e.target.value;
  //     setState((p) => ({ ...p, name }));
  //   };

  //   const editStatus = (e) => {
  //     const status = e.target.value;
  //     setState((p) => ({ ...p, status }));
  //   };

  const getPatientInfo = (_id) => {
    console.log(_id);
    _fetchApi(
      `${apiURL()}/patientrecords/patient/${_id}`,
      (data) => {
        // if (data && data.length) {
        //   console.log(data.results)
        let info = data.results[0];
        // alert(JSON.stringify(info))
        setState((p) => ({
          ...p,
          imagePreviewUrl: `${apiURL()}/${info.patient_passport}`,
        }));
        // }
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    if (patient_id) {
      getPatientInfo(patient_id);
    }
  }, [patient_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = state.active === "edit" ? "profile" : "edit";
    setState((p) => ({ ...p, active: activeP }));
  };

  const { imagePreviewUrl, active } = state;
  return (
    <div>
      {/* ccccw{JSON.stringify({patient_id })} */}
      {active === "edit" ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
        </Edit>
      ) : (
        <Profile onSubmit={handleSubmit} src={imagePreviewUrl} />
      )}
    </div>
  );
}

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas _label">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} alt="patient_pass" className="imgs" />
    </div>
    <input
      id="photo-upload"
      type="file"
      className="_inputss"
      onChange={onChange}
    />
  </label>
);

const Profile = ({ onSubmit, src }) => (
  <div className="cards">
    <form onSubmit={onSubmit} className="_forms">
      <label className="custom-file-upload fas _label">
        <div className="img-wrap">
          <img
            for="photo-upload"
            src={src}
            alt="patient_pass"
            className="imgs img-fluid"
          />
        </div>
      </label>
      <button type="submit" className="edit">
        Edit Profile{" "}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="cards">
    <h4 className="text-center">Patient Passport</h4>
    <form onSubmit={onSubmit}>
      <center>{children}</center>
    </form>
  </div>
);
