import React from "react";
import divider from "../assets/divider.svg";
import star from "../assets/star.svg";
import star2 from "../assets/star2.svg";

const Profile = ({ data }: any) => {
  return (
    <div>
      <img src={data?.profile?.avatar} alt="user" />
      <div>
        <span>{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</span>
        <span>{data?.accountNumber}</span>
      </div>

      <img src={divider} alt="divider" />

      <div className="tier">
        <span>User's tier</span>
        <div className="stars">
          <img src={star2} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>

      <img src={divider} alt="divider" />

      <div>
        <span>{`NGN${data?.accountBalance}`}</span>
        <span>9912345678/Providus Bank</span>
      </div>
    </div>
  );
};

export default Profile;
