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
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const jsonData = await response.json();
      setData(jsonData);
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

  return (
    <div className='user__page'>
      <Navbar />
      <div className="first__row">
        <Sidebar />
        <div className="main__column">
          <div className="actions">
            <Link to="/" className="back">
              <img src={back} alt="back arrow" />
              <p>Back to users</p>
            </Link>
            <div className="user__action">
              <h3>User Details</h3>
              <div>
                <button className="blacklist">BLACKLIST USER</button>
                <button className="activate">ACTIVATE USER</button>
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
