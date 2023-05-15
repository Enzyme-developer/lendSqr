import React, { Children, useState } from "react";
import DummyTab from "./DummyTab";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";

const Tabs = ({ data }: any) => {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "savings",
    "App and System",
  ];
  const [currentTab, setCurrentTab] = useState("General Details");
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(33, 63, 125, 0.06)",
          boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "4px",
          padding: "30px",
          paddingBottom:'0px',
          marginBottom: '30px'
        }}
      >
        <Profile data={data} />
        <div
          className="tabs"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            overflowX: "scroll",
          }}
        >
          {tabs.map((tab: string) => (
            <p
              style={{ margin: "15px", width: "max-content" }}
              className={`${tab === currentTab ? "active__tab" : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>
      {currentTab === "General Details" && <GeneralDetails data={data} />}
      {currentTab !== "General Details" && <DummyTab />}
    </div>
  );
};

export default Tabs;
