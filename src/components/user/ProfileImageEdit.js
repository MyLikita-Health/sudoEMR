import React, { useState } from "react";
import { apiURL } from "../../redux/actions";
// import { useDispatch } from "react-redux";
import Loading from "../loading";
import { _customNotify } from "../utils/helpers";
// import ImageUpload from '../../record/image-upload/ImageUpload';

export function ProfileImageEdit({ user, getData }) {
  //   const [files, setFiles] = useState([]);
  const [file, ] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState('')

  function submitForm(e) {
    let formData = new FormData();
    // for (var x = 0; x < files.length; x++) {
    //   formData.append('images', files[x]);
    // }
    formData.append("image", file);
    formData.append("id", user.id);
    fetch(`${apiURL()}/users/profile/image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        // console.log(formData, file);
        console.log(image);
        getData();
        _customNotify("Picture Updated Successfully");
      });
  }

  const handleChange = ({ target: { validity, files, value } }) => {
    // const _files = e.target.files;
    // const types = ['image/png', 'image/jpeg', 'image/gif']
    // if (files.length > 3) {
    //   const msg = 'Only 3 images can be uploaded at a time';
    //   value = null; // discard selected file
    //   console.log(msg);
    //   setError(msg)
    //   return false;
    // } else {
    // setFile(files[0]);
    // console.log(files);
    let formData = new FormData();
    // for (var x = 0; x < files.length; x++) {
    //   formData.append('images', files[x]);
    // }
    formData.append("image", files[0]);
    formData.append("id", user.id);
    fetch(`${apiURL()}/users/profile/image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        // console.log(formData, file);
        console.log(image);
        setLoading(false);
      });
    // }
  };

  return (
    <form onSubmit={(e) => submitForm(e.preventDefault())}>
      {loading && <Loading />}
      <label className="btn btn-primary mt-2">
        Edit Picture
        <input
          type="file"
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </label>
    </form>
  );
}
