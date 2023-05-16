import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import dropdown from "../assets/dropdown.svg";
import home from "../assets/home.svg";
import users from "../assets/users.svg";
import guarantors from "../assets/guarantors.svg";
import loan from "../assets/loan.svg";
import decisionModel from "../assets/decisionModel.svg";
import savings from "../assets/savings.svg";
import loanRequest from "../assets/loanRequest.svg";
import whitelist from "../assets/whitelist.svg";
import karma from "../assets/karma.svg";
import organization from "../assets/organization.svg";
import savingsProduct from "../assets/savingsProduct.svg";
import fees from "../assets/fees.svg";
import transaction from "../assets/transaction.svg";
import service from "../assets/services.svg";
import serviceAccount from "../assets/serviceAccount.svg";
import settlement from "../assets/settlement.svg";
import report from "../assets/report.svg";
import preferences from "../assets/preferences.svg";
import feesAndPricing from "../assets/feesAndPricing.svg";
import audit from "../assets/audit.svg";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  return (
    <main>
      <div className="sidebar__toggle" onClick={() => setNav(!nav)}>
        <img src={dropdown} alt="toggle" />
      </div>

      <aside className={`sidebar__aside ${nav ? "sidebar__aside__hidden" : "sidebar__aside__display"}`}>
        <div className="sidebar__switch">
          <img src={organization} className="sidebar__switch-child" alt="dropdown" />
          <p className="sidebar__switch-child">Switch Organization</p>
          <img className="sidebar__switch-child" src={dropdown} alt="dropdown" />
        </div>

        <div className="sidebar__dashboard">
          <SideBarItem title="Dashboard" imgSrc={home} />
        </div>

        <div className="sidebar__category">
          <p className="sidebar__heading">CUSTOMERS</p>
          <SideBarItem title="Users" imgSrc={users} className="sidebar__item__active" />
          <SideBarItem title="Guarantors" imgSrc={guarantors} />
          <SideBarItem title="Loans" imgSrc={loan} />
          <SideBarItem title="Decision models" imgSrc={decisionModel} />
          <SideBarItem title="Savings" imgSrc={savings} />
          <SideBarItem title="Loan Requests" imgSrc={loanRequest} />
          <SideBarItem title="Whitelist" imgSrc={whitelist} />
          <SideBarItem title="Karma" imgSrc={karma} />
        </div>

        <div className="sidebar__category">
          <p className="sidebar__heading">BUSINESSES</p>
          <SideBarItem title="Organization" imgSrc={organization} />
          <SideBarItem title="Loan Products" imgSrc={loan} />
          <SideBarItem title="Saving Products" imgSrc={savingsProduct} />
          <SideBarItem title="Fees And Charges" imgSrc={fees} />
          <SideBarItem title="Transactions" imgSrc={transaction} />
          <SideBarItem title="Services" imgSrc={service} />
          <SideBarItem title="Service Accounts" imgSrc={serviceAccount} />
          <SideBarItem title="Settlements" imgSrc={settlement} />
          <SideBarItem title="Reports" imgSrc={report} />
        </div>

        <div className="sidebar__category">
          <p className="sidebar__heading">SETTINGS</p>
          <SideBarItem title="Preferences" imgSrc={preferences} />
          <SideBarItem title="fees And Pricing" imgSrc={feesAndPricing} />
          <SideBarItem title="Audit Logs" imgSrc={audit} />
        </div>
      </aside>
    </main>
  );
};

export default Sidebar;

