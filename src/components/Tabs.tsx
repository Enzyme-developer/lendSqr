import React, { useState } from "react";
import DummyTab from "./DummyTab";
import GeneralDetails from "./GeneralDetails";
import Profile from "./Profile";
import './styles/tab.scss';

const Tabs = ({ data }: any) => {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  const [currentTab, setCurrentTab] = useState("General Details");

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <Profile data={data} />
        <div className="tabs">
          {tabs.map((tab: string) => (
            <p
              key={tab}
              className={`tab ${tab === currentTab ? "active-tab" : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>
      <div className="tabs-content">
        {currentTab === "General Details" && <GeneralDetails data={data} />}
        {currentTab !== "General Details" && <DummyTab />}
      </div>
    </div>
  );
};

export default Tabs;
