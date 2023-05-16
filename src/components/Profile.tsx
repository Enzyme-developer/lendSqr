import divider from "../assets/divider.svg";
import star from "../assets/star.svg";
import star2 from "../assets/star2.svg";
import "./styles/profile.scss";

const Profile = ({ data }: any) => {
  return (
    <div className="profile">
      <img
        src={data?.profile?.avatar}
        alt="user"
        className="profile__picture"
      />
      <div className="profile__user-info">
        <p className="profile__name">{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</p>
        <p className="profile__number">{data?.accountNumber}</p>
      </div>

      <img src={divider} alt="divider" className="profile__divider" />

      <div className="profile__tier">
        <p className="profile__tier-label">User's tier</p>
        <div className="profile__stars">
          <img src={star2} alt="star" className="profile__star" />
          <img src={star} alt="star" className="profile__star" />
          <img src={star} alt="star" className="profile__star" />
        </div>
      </div>

      <img src={divider} alt="divider" className="profile__divider" />

      <div className="profile__price">
        <p className="profile__price-value">{`NGN${data?.accountBalance}`}</p>
        <p className="profile__price-info">9912345678/Providus Bank</p>
      </div>
    </div>
  );
};

export default Profile;
