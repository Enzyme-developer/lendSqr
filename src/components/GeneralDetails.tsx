import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Education from "./Education";
import Guarantor from "./Guarantor";
import PersonalInfo from "./PersonalInfo";
import Socials from "./Socials";

const GeneralDetails = ({ data }: any) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        flexWrap: "wrap",
        background: "#FFFFFF",
        border: "1px solid rgba(33, 63, 125, 0.06)",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
        padding: "30px",
      }}
    >
      <PersonalInfo data={data} />
      <Education education={data?.education} />
      <Socials socials={data?.socials} />
      <Guarantor guarantor={data?.guarantor} />
    </div>
  );
};

export default GeneralDetails;
