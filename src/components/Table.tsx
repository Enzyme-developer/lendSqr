import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { itemProp } from "../types";
import more from "../assets/more.svg";
import Filter from "./Filter";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState({
    organization: "",
    phoneNumber: "",
    email: "",
    username: "",
    Date: "",
    status: "",
  });
  const itemsPerPage = 10; // Number of items to display per page
  const paginationRange = 2; // Number of page numbers to show on each side of the current page

      const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error fetching data");
      }
    };

  useEffect(() => {
    // Fetch data from API and set it to the 'data' state

    fetchData();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber <= 1) {
      setCurrentPage(1);
    }
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
    setCurrentPage(1); // Reset to the first page when changing the filter
  };

  console.log(filter)

  const filteredData = data.filter((item: itemProp) => {
    const isOrganizationMatch = filter.organization
      ? item.organization
          ?.toLowerCase()
          ?.includes(filter.organization?.toLowerCase())
      : true;
    const isPhoneNumberMatch = filter.phoneNumber
      ? item.phoneNumber
          ?.toLowerCase()
          ?.includes(filter.phoneNumber?.toLowerCase())
      : true;
    const isEmailMatch = filter.email
      ? item.email?.toLowerCase()?.includes(filter.email?.toLowerCase())
      : true;
    const isNameMatch = filter.username
      ? item.profile.firstName?.toLowerCase()?.includes(filter.username?.toLowerCase()) || item.profile.lastName ?.toLowerCase()?.includes(filter.username?.toLowerCase())
      : true;

    return (
      isOrganizationMatch && isPhoneNumberMatch && isEmailMatch && isNameMatch
    );
  });

    
  const handleFilter = () => {
    setData(filteredData.slice(firstIndex, lastIndex));
    setShowFilter(false);
  };

  const handleReset = () => {
    fetchData()
    // setData(data)
    setShowFilter(false);
  };

  const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentData = data.slice(firstIndex, lastIndex);
    

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startPage = Math.max(1, currentPage - paginationRange);
  const endPage = Math.min(totalPages, currentPage + paginationRange);

  let pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* Filter component */}
      {showFilter && (
        <Filter
          data={data}
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleFilter={handleFilter}
          handleReset={handleReset}
        />
      )}

      <table>
        {/* Table structure */}
        <thead>
          <tr>
            <th>
              <span>Organization</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
            <th>
              <span>Name</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
            <th>
              <span>Email</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
            <th>
              <span>Phone number</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
            <th>
              <span>Date Joined</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
            <th>
              <span>Status</span>
              <span onClick={() => setShowFilter(!showFilter)}>Filter</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item: any, index) => (
            <tr key={index}>
              <td>{item.orgName}</td>
              <td>{item.profile.firstName + " " + item.profile.lastName}</td>
              <td>{item.email}</td>
              <td>{item.profile.phoneNumber}</td>
              {/* <td>
                {Intl.DateTimeFormat("en", {
                  year: "numeric",
                  day: "2-digit",
                  month: "long",
                }).format(item.createdAt)}
              </td> */}
              <td>{item.employmentStatus}</td>
              <td>{<img src={more} alt="options" />}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination control */}
      <div>
        <div className="showing">
          <p>shwing {lastIndex} of 100</p>
        </div>

        {filteredData.length > itemsPerPage && (
          <ul className="pagination">
            {/* Previous page button */}
            <li
              className={currentPage === 1 ? "disabled" : ""}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </li>

            {/* Page numbers */}
            {startPage > 1 && <li>...</li>}
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={currentPage === pageNumber ? "active" : ""}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            ))}
            {endPage < totalPages && <li>...</li>}

            {/* Next page button */}
            <li
              className={currentPage === totalPages ? "disabled" : ""}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Table;
