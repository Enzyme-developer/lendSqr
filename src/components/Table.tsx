import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { itemProp } from "../types";
import more from "../assets/more.svg";
import Filter from "./Filter";
import Modal from "./Modal";
import filterImage from "../assets/filter.svg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";
import "./styles/table.scss";

const Table = ({filterBool} :any) => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [filter, setFilter] = useState({
    organization: "",
    phoneNumber: "",
    email: "",
    username: "",
    Date: "",
    date: "",
    status: "",
  });
  const itemsPerPage = 10;
  const paginationRange = 2;

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
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

  console.log(filter);

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
      ? item.profile.firstName
          ?.toLowerCase()
          ?.includes(filter.username?.toLowerCase())
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
    fetchData();
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
    <div className="table__container">
      <div className="table__main">
        {/* Filter component */}
        {filterBool && showFilter && (
          <Filter
            data={data}
            filter={filter}
            handleFilterChange={handleFilterChange}
            handleFilter={handleFilter}
            handleReset={handleReset}
          />
        )}

        <table className="table">
          {/* Table structure */}
          <thead>
            <tr>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Organization</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Name</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Email</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Phone Number</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Date Joined</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexspan table__header"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <p className="table__header-text">Status</p>
                  <img
                    className="table__header-icon"
                    src={filterImage}
                    alt="filter"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item: any, index) => (
              <tr key={index} className="table__row">
                <td>{item.orgName}</td>
                <td>{item.profile.firstName + " " + item.profile.lastName}</td>
                <td>{item.email}</td>
                <td>{item.profile.phoneNumber}</td>
                <td>
                  {Intl.DateTimeFormat("en", {
                    year: "numeric",
                    day: "2-digit",
                    month: "long",
                  }).format(new Date(item.createdAt)) +
                    " " +
                    Intl.DateTimeFormat("en", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }).format(new Date(item.createdAt))}
                </td>
                <td>{item?.education?.employmentStatus}</td>
                <td>
                  {
                    <img
                      src={more}
                      alt="options"
                      onClick={() => {
                        setUserId(item?.id);
                        setShowModal(!showModal);
                      }}
                    />
                  }
                </td>
                {userId === item?.id ? <Modal id={userId} /> : null}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination control */}
        <div className="pagination">
          <div className="pagination__showing">
            <p>showing {lastIndex} of 100</p>
          </div>

          {filteredData.length > itemsPerPage && (
            <ul className="pagination__page">
              {/* Previous page button */}
              <li
                className={`pagination__page__item ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img className="pagination__page__icon" src={prev} alt="prev" />
              </li>

              {/* Page numbers */}
              {startPage > 1 && <li className="pagination__page__item">...</li>}
              {pageNumbers.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`pagination__page__item ${
                    currentPage === pageNumber ? "active__number" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </li>
              ))}
              {endPage < totalPages && (
                <li className="pagination__page-item">...</li>
              )}

              {/* Next page button */}
              <li
                className={`pagination__page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <img className="pagination__page-icon" src={next} alt="next" />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
