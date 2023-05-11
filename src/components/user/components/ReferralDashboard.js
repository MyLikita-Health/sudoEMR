import React from "react";
import { FaCopy } from "react-icons/fa";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import { Card } from "reactstrap";

function ReferralDashboard({ profile }) {
  const link = `https://sudoEMR.clinic/signup/doctor/${profile.referralId}`;
  return (
    <Card className="p-2 mb-2 mt-2">
      <h6>Referrals</h6>

      <div>
        Your referral link is{" "}
        <a href={link} target="_blanc" className="mr-1 ml-1">
          {link}
        </a>
        <button
          className="btn btn-primary btn-sm"
          onClick={() =>
            navigator.clipboard
              .writeText(link)
              .then(() => _customNotify("Referral link Copied!"))
              .catch(() => _warningNotify("Cannot copy link at this time"))
          }
        >
          <FaCopy />
          copy link
        </button>
      </div>

      <span>
        Number of your referred Registration: <strong>0</strong>
      </span>
    </Card>
  );
}

export default ReferralDashboard;
