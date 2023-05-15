import React from "react";
import Info from "./Info";

const Guarantor = ({ guarantor }: any) => {
  return (
    <div>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "16px",
          color: "#213F7D",
        }}
      >
        Guarantor
      </h1>
      <Info
        title1="FULL NAME"
        title2="PHONE NUMBER"
        title3="EMAIL ADDRESS"
        title4="RELATIONSHIP"
        value1={guarantor?.firstName + " " + guarantor?.lastName}
        value2={guarantor?.phoneNumber}
        value3={guarantor?.email ? guarantor?.email : "NIL"}
        value4={guarantor?.relationship ? guarantor?.relationship : "NIL"}
      />
    </div>
  );
};

export default Guarantor;
