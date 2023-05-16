import React from "react";
import { filterProp } from "../types";
import "../styles/filter.scss";

const Filter = ({
  data,
  filter,
  handleReset,
  handleFilter,
  handleFilterChange,
}: filterProp) => {
  return (
    <div className="filter">
      <p className="filter__label">Organization</p>
      <select
        name="organization"
        className="filter__select"
        value={filter.organization}
        onChange={handleFilterChange}
      >
        {data.map((item: any) => (
          <option key={item.orgName} value={item.orgName}>
            {item.orgName}
          </option>
        ))}
      </select>

      <p className="filter__label">Username</p>
      <input
        type="text"
        className="filter__input"
        value={filter.username}
        name="username"
        placeholder="Username"
        onChange={handleFilterChange}
      />

      <p className="filter__label">Email</p>
      <input
        type="email"
        className="filter__input"
        value={filter.email}
        name="email"
        placeholder="Email"
        onChange={handleFilterChange}
      />

      <p className="filter__label">Date</p>
      <input
        type="date"
        className="filter__input"
        value={filter.date}
        name="Date"
        placeholder="Date"
        onChange={handleFilterChange}
      />

      <p className="filter__label">Phone Number</p>
      <input
        type="tel"
        className="filter__input"
        value={filter.phoneNumber}
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleFilterChange}
      />

      <p className="filter__label">Status</p>
      <select
        name="status"
        className="filter__select"
        value={filter.status}
        onChange={handleFilterChange}
      >
        {data.map((item: any) => (
          <option key={item?.status} value={item?.status}>
            {item?.education?.employmentStatus}
          </option>
        ))}
      </select>

      <div className="filter__button-group">
        <button onClick={handleReset} className="filter__button filter__button--reset">
          Reset
        </button>
        <button onClick={handleFilter} className="filter__button filter__button--filter">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
