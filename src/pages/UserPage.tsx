import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import back from "../assets/back.svg";
import "../components/styles/user.scss";

const UserPage = () => {
  const { id } = useParams();
  // const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const jsonData = await response.json();
      // setData(jsonData);
      localStorage.setItem('userData', JSON.stringify(jsonData))
      console.log(jsonData);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = JSON.parse(localStorage.getItem('userData') || '{}')

  return (
    <div className="user-page">
      <Navbar />
      <div className="user-page__first-row">
        <Sidebar />
        <div className="user-page__main-column">
          <div className="user-page__actions">
            <Link to="/" className="user-page__back">
              <img src={back} alt="back arrow" />
              <p>Back to users</p>
            </Link>
            <div className="user-page__user-action">
              <h3>User Details</h3>
              <div>
                <button className="user-page__user-action__blacklist">BLACKLIST USER</button>
                <button className="user-page__user-action__activate">ACTIVATE USER</button>
              </div>
            </div>
          </div>
          <Tabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
