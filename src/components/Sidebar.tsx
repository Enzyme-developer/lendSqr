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
import caret from "../assets/caret.svg";
import "./styles/sidebar.scss";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const dynamicStyles:any = `{backgroundColor: ${nav? 'yellow' : ''}`;
  return (
    <main>
      <aside>
        <div className="switch">
          <img src={dropdown} className="switch__child" alt="dropdown" />
          <p className="switch__child">Switch Organization</p>
          <img className="switch__child" src={dropdown} alt="dropdown" />
        </div>

        <div className="dashboard">
          <SideBarItem title="Dashboard" imgSrc={home} />
        </div>

        <div className="category">
          <p className="heading">CUSTOMERS</p>
          <SideBarItem title="Users" imgSrc={users} className={true} />
          <SideBarItem title="Guarantors" imgSrc={guarantors} />
          <SideBarItem title="Loans" imgSrc={loan} />
          <SideBarItem title="Decision models" imgSrc={decisionModel} />
          <SideBarItem title="Savings" imgSrc={savings} />
          <SideBarItem title="Loan Requests" imgSrc={loanRequest} />
          <SideBarItem title="Whitelist" imgSrc={whitelist} />
          <SideBarItem title="Karma" imgSrc={karma} />
        </div>

        <div className="category">
          <p className="heading">BUSINESSES</p>
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

        <div className="category">
          <p className="heading">SETTINGS</p>
          <SideBarItem title="Preferences" imgSrc={preferences} />
          <SideBarItem title="fees And Pricing" imgSrc={feesAndPricing} />
          <SideBarItem title="Audit Logs" imgSrc={audit} />
        </div>
      </aside>

      <div className="toggle" onClick={() => setNav(!nav)}>
        <img src={dropdown} alt="toggle" />
      </div>
    </main>
  );
};

export default Sidebar;
