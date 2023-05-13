import React from "react";

const Filter = ({ data, filter, handleReset, handleFilter }: any) => {
  return (
    <div>
      <p>Organization</p>
      <select name="org" id="">
        {data.map((item: any) => (
          <option value={item.orgName}>{item.orgName}</option>
        ))}
          </select>
          

      <p>Username</p>
      <input type="text" value={filter.name}         placeholder="Username"/>

      <p>Email</p>
      <input type="date" value={filter.email}  placeholder="Email"/>

      <p>Date</p>
      <input type="text" value={filter.date}  placeholder="Date"/>

      <p>Phone Number</p>
      <input type="tel" value={filter.phoneNumber}  placeholder="Phone Number"/>

      <p>Status</p>

      <select name="status" id="">
        {data.map((item: any) => (
          <option value={item?.status}>{item?.status}</option>
        ))}
      </select>

      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};

export default Filter;
