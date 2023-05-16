import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__navbar">
        <Navbar />
      </div>
      <div className="dashboard__details">
        <Sidebar />
        <div className="dashboard__main">
          <Cards />
          <Table filterBool={false} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
