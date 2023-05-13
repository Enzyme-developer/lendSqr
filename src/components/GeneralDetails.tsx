import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Education from "./Education";
import Guarantor from "./Guarantor";
import PersonalInfo from "./PersonalInfo";
import Socials from "./Socials";

const GeneralDetails = ({ data }: any) => {
  return (
    <div>
      <PersonalInfo data={data} />
      <Education education={data?.education} />
      <Socials socials={data?.socials} />
      <Guarantor guarantor={data?.guarantor} />
    </div>
  );
};

export default GeneralDetails;
