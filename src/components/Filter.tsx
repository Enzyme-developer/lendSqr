import React from "react";
import './styles/filter.scss'

const Filter = ({
  data,
  filter,
  handleReset,
  handleFilter,
  handleFilterChange,
}: any) => {
  return (
    <div className='filter'>
      <p>Organization</p>
      <select
        name="organization"
        id=""
        value={filter.organization}
        onChange={handleFilterChange}
      >
        {data.map((item: any) => (
          <option value={item.orgName}>{item.orgName}</option>
        ))}
      </select>

      <p>Username</p>
      <input
        type="text"
        value={filter.username}
        name="username"
        placeholder="Username"
        onChange={handleFilterChange}
      />

      <p>Email</p>
      <input
        type="email"
        value={filter.email}
        name="email"
        placeholder="Email"
        onChange={handleFilterChange}
      />

      <p>Date</p>
      <input
        type="date"
        value={filter.date}
        name="Date"
        placeholder="Date"
        onChange={handleFilterChange}
      />

      <p>Phone Number</p>
      <input
        type="tel"
        value={filter.phoneNumber}
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleFilterChange}
      />

      <p>Status</p>

      <select
        name="status"
        id=""
        value={filter.status}
        onChange={handleFilterChange}
      >
        {data.map((item: any) => (
          <option value={item?.status}>{item?.education?.employmentStatus}</option>
        ))}
      </select>

      <div>
        <button onClick={handleReset} className='reset-btn'>Reset</button>
        <button onClick={handleFilter} className='filter-btn'>Filter</button>
      </div>
    </div>
  );
};

export default Filter;
