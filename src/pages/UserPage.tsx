import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import GeneralDetails from "../components/GeneralDetails";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const UserPage = () => {
  const { id } = useParams()
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
  }, []);
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Cards />
      <GeneralDetails data={data} />
    </main>
  );
};

export default UserPage;
