import { socialProp } from "../types";
import Info from "./Info";

const Socials = ({ socials }: socialProp) => {
  return (
    <div>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#213F7D",
          marginTop: '20px'
        }}
      >
        Socials
      </h1>
      <Info
        title1="TWITTER"
        title2="FACEBOOK"
        title3="INSTAGRAM"
        value1={socials?.twitter}
        value2={socials?.facebook}
        value3={socials?.instagram}
      />
    </div>
  );
};

export default Socials;
