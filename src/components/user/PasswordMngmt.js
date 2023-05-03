import React, { useState } from "react";
import { Card, CardTitle, FormGroup } from "reactstrap";
import PasswordInput from "../auth/registration/component/PasswordInput";
import { MdUpdate } from "react-icons/md";
import { _postApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { _customNotify, _warningNotify } from "../utils/helpers";
import CustomButton from "../comp/components/Button";
import { useSelector } from "react-redux";

// Resistance
// Sensitivity

function PasswordMngmt() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state) => state.auth.user.id);

  const updatePassword = () => {
    setLoading(true);
    _postApi(
      `${apiURL()}/api/users/changepassword`,
      { id: userId, oldPassword: oldPassword, newPassword: newPassword },
      () => {
        _customNotify("Password Updated Successfully");
        setLoading(false);
      },
      (err) => {
        // console.log(err);
        _warningNotify("Error Occur");
        setLoading(false);
      }
    );
  };

  return (
    <Card className="p-2 mb-2 mt-2">
      <CardTitle tag="h6" className="font-weight-bold">
        Change Password
      </CardTitle>
      {/* {JSON.stringify(userId)} */}
      <PasswordInput
        value={oldPassword}
        required
        onChange={(e) => setOldPassword(e.target.value)}
        name="oldPassword"
        label="Old Password"
      />
      <FormGroup>
        <PasswordInput
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
          name="newPassword"
          label="New Password"
        />
        <PasswordInput
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
          label="Retype New Password"
        />
        {!newPassword.length ? null : newPassword === confirmPassword ? (
          <p className="text-success mt--5">Password is confirmed</p>
        ) : (
          <p className="text-danger">Password not march</p>
        )}
      </FormGroup>
      <div className="d-flex flex-row justify-content-center">
        <CustomButton
          color="primary"
          className="m-2"
          loading={loading}
          onClick={updatePassword}
        >
          <MdUpdate size={20} className="mr-1" />
          Update Password
        </CustomButton>
      </div>
    </Card>
  );
}

export default PasswordMngmt;
