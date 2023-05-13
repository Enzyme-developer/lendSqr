import React from "react";
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

const Sidebar = () => {
  return (
    <aside>
      <div className="switch">
        <img src={dropdown} alt="dropdown" />
        <p>Switch Organization</p>
        <SideBarItem title="dashboard" imgSrc={home} />
      </div>

      <ul className="category">
        <p>CUSTOMERS</p>
        <SideBarItem title="Users" imgSrc={users} />
        <SideBarItem title="Guarantors" imgSrc={guarantors} />
        <SideBarItem title="Loans" imgSrc={loan} />
        <SideBarItem title="Decision models" imgSrc={decisionModel} />
        <SideBarItem title="Savings" imgSrc={savings} />
        <SideBarItem title="Loan Requests" imgSrc={loanRequest} />
        <SideBarItem title="Whitelist" imgSrc={whitelist} />
        <SideBarItem title="Karma" imgSrc={karma} />
      </ul>

      <ul className="category">
        <p>BUSINESSES</p>
        <SideBarItem title="Organization" imgSrc={organization} />
        <SideBarItem title="Loan Products" imgSrc={loan} />
        <SideBarItem title="Saving Products" imgSrc={savingsProduct} />
        <SideBarItem title="Fees And Charges" imgSrc={fees} />
        <SideBarItem title="Transactions" imgSrc={transaction} />
        <SideBarItem title="Services" imgSrc={service} />
        <SideBarItem title="Service Accounts" imgSrc={serviceAccount} />
        <SideBarItem title="Settlements" imgSrc={settlement} />
        <SideBarItem title="Reports" imgSrc={report} />
      </ul>

      <ul className="category">
        <p>SETTINGS</p>
        <SideBarItem title="Preferences" imgSrc={preferences} />
        <SideBarItem title="fees And Pricing" imgSrc={feesAndPricing} />
        <SideBarItem title="Audit Logs" imgSrc={audit} />
      </ul>
    </aside>
  );
};

export default Sidebar;
