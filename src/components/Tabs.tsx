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
    'App and System'
  ];
  const [currentTab, setCurrentTab] = useState("General Details");
  return (
    <div>
      <Profile data={data} />
      <div className="tabs">
        {tabs.map((tab: string) => (
          <span onClick={() => setCurrentTab(tab)}>{tab}</span>
        ))}
      </div>
      {currentTab === "General Details" && <GeneralDetails data={data} />}
      {currentTab !== "General Details" && <DummyTab />}
    </div>
  );
};

export default Tabs;
