import React from "react";
import divider from "../assets/divider.svg";
import star from "../assets/star.svg";
import star2 from "../assets/star2.svg";
import './styles/profile.scss'

const Profile = ({ data }: any) => {
  return (
    <div className='main'>
      <img src={data?.profile?.avatar} alt="user" className='picture' />
      <div className="user__info">
        <p className="name">{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</p>
        <p className='number'>{data?.accountNumber}</p>
      </div>

      <img src={divider} alt="divider" />

      <div className="tier">
        <p>User's tier</p>
        <div className="stars">
          <img src={star2} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>

      <img src={divider} alt="divider" />

      <div className='price'>
        <p>{`NGN${data?.accountBalance}`}</p>
        <p>9912345678/Providus Bank</p>
      </div>
    </div>
  );
};

export default Profile;
