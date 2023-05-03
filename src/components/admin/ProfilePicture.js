import React, { useState } from "react";
import { MdUpdate } from "react-icons/md";
import { useSelector } from "react-redux";
import { _customNotify, _warningNotify } from "../utils/helpers";
import { apiURL } from "../../redux/actions";
import { getImageUrl } from "../../redux/actions/api";
import { CustomButton } from "../comp/components";
import { Input } from "reactstrap";

function ProfilePicture() {
  const user = useSelector((state) => state.auth.user);

  const [loading, toggle] = useState(false);
  const [imgfile, uploadimg] = useState([]);
  const [profileImage, setProfileImage] = useState({});

  const handleSubmit = () => {
    const userId = user.id;
    let formData = new FormData();
    formData.append("image", profileImage[0]);
    formData.append("id", userId);
    toggle(true);
    fetch(`${apiURL()}/users/profile/image`, {
      method: "POST",
      body: formData,
    })
      .then((raw) => raw.json())
      .then((resp) => {
        if (resp.success) {
          _customNotify("Picture Update Successfully");
          toggle(false);
        } else {
          _warningNotify("Error Occur");
          toggle(false);
        }
      })
      .catch((e) => {
        _warningNotify("Error Occur");
        toggle(false);
      });
    console.log(formData);
  };

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      // console.log(e.target.files, "_____________");
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0] || user.image),
      ]);
    }
  };
  const handleChange = (e) => {
    setProfileImage(e.target.files);
  };
  return (
    <div className="p-2 mb-2">
      <center>
        {/* {JSON.stringify({user:user.image})} */}
        <label>
          {!imgfile.length && (
            <span>
              <img
                src={getImageUrl(user.image)}
                height="200"
                width="200"
                alt="med1"
                style={{ borderRadius: 30 }}
              />
            </span>
          )}
          {imgfile.map((elem) => {
            return (
              <>
                <span key={elem}>
                  <img
                    src={elem}
                    height="200"
                    width="200"
                    alt="med1"
                    style={{ borderRadius: 30 }}
                  />
                </span>
              </>
            );
          })}
          <br />
          <Input
            type="file"
            name="profileImage"
            id="exampleFile"
            multiple
            onChange={(e) => {
              imgFilehandler(e);
              handleChange(e);
            }}
            height="100"
            width="100"
            style={{ display: "none" }}
          />
          <span>Click to upload new logo</span>
        </label>
        <br />
      </center>
      <div className="d-flex flex-row justify-content-center">
        <CustomButton
          color="primary"
          className="m-2"
          loading={loading}
          onClick={handleSubmit}
        >
          <MdUpdate size={20} className="mr-1" />
          Update Profile Picture
        </CustomButton>
      </div>
    </div>
  );
}

export default ProfilePicture;
