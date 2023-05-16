import React from "react";
import Info from "./Info";

const Education = ({ education, monthlyIncome }: any) => {
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
        Education and Employment
      </h1>
      <Info
        title1="LEVEL OF EDUCATION"
        title2="EMPLOYMENT STATUS"
        title3="SECTOR OF EMPLOYMENT"
        value1={education?.level}
        value2={education?.employmentStatus}
        value3={education?.sector}
      />
      <Info
        title1="OFFICE EMAIL"
        title2="MONTHLY INCOME"
        title3="LOAN REPAYMENT"
        value1={education?.officeEmail}
        value2={education?.monthlyIncome[0]}
        value3={education?.loanRepayment}
      />
    </div>
  );
};

export default Education;
