import React from "react";
import Info from "./Info";

const PersonalInfo = ({ data }: any) => {
  return (
    <div style={{display:'flex', flexDirection: 'column', flexWrap:'wrap'}}>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#213F7D",
        }}
      >
        Personal Information
      </h1>
      <Info
        title1="FULL NAME"
        title2="PHONE NUMBER"
        title3="EMAIL ADDRESS"
        value1={data?.profile?.firstName + " " + data?.profile?.lastName}
        value2={data?.profile?.phoneNumber}
        value3={data?.email}
      />
      <Info
        title1="MARITAL STATUS"
        title2="TYPE OF RESIDENCE"
        value1={
          data?.profile?.maritalStatus ? data?.profile?.maritalStatus : "NIL"
        }
        value2={data?.profile?.residence ? data?.profile?.residence : "NIL"}
      />
    </div>
  );
};

export default PersonalInfo;
