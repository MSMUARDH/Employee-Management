import { useEffect, useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  getAllEmployee,
} from "../features/Employees/employeeSlice";
import _ from "lodash";

const pageSize = 5;
function HomePage() {
  const { employees } = useSelector((state) => state.Employees);
  const dispatch = useDispatch();

  const [dropDownItem, setDropdownItem] = useState(null);

  // * pagination
  // const [paginatedEmployees, setPaginatedEmployees] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllEmployee());
    // setPaginatedEmployees(_(employees).slice(0).take(pageSize).value());
  }, []);

  // * pagination
  // const pageCount = employees ? Math.ceil(employees.length / pageSize) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);

  const handleSelect = (eventKey, event) => {
    setDropdownItem(eventKey);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  // * pagination
  // const pagination = (pageNo) => {
  //   setCurrentPage(pageNo);
  //   const startIndex = (pageNo - 1) * pageSize;
  //   const paginatedEmployees = _(employees)
  //     .slice(startIndex)
  //     .take(pageSize)
  //     .value();
  //   setPaginatedEmployees(paginatedEmployees);
  //   console.log(paginatedEmployees);
  // };

  return (
    <div className="m-5">
      <div className="d-flex justify-content-end mb-3">
        <Dropdown
          style={{ marginRight: "6px" }}
          onSelect={(eventKey, event) => handleSelect(eventKey, event)}
        >
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Employee Types
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Full Time">Full Time</Dropdown.Item>
            <Dropdown.Item eventKey="Part Time"> Part Time</Dropdown.Item>
            <Dropdown.Item eventKey="Contract Basis">
              Contract Basis
            </Dropdown.Item>
            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
            <Dropdown.Item eventKey="">All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/form">
          <MDBBtn className="me-1" color="primary">
            Add People
          </MDBBtn>
        </Link>
      </div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th className="fw-bold" scope="col">
              Name
            </th>
            <th className="fw-bold" scope="col">
              Emp ID
            </th>
            <th className="fw-bold" scope="col">
              Designation
            </th>
            <th className="fw-bold" scope="col">
              Emp Type
            </th>
            <th className="fw-bold" scope="col">
              Experience
            </th>
            <th className="fw-bold" scope="col"></th>
            <th className="fw-bold" scope="col"></th>
          </tr>
        </MDBTableHead>
        {employees === 0 ? (
          <MDBTableBody className="align-center mb-0">
            <tr>
              <td colSpan={8} className="text-center mb-0">
                No Data Found
              </td>
            </tr>
          </MDBTableBody>
        ) : (
          employees
            .filter((employee) => {
              return dropDownItem === null
                ? employee
                : employee.employeeType.includes(dropDownItem);
            })
            .map((employee, index) => (
              <MDBTableBody key={index}>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="fw-bold mb-1">{employee.displayName}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{employee._id}</p>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{employee.designation}</p>
                  </td>
                  <td>{employee.employeeType}</td>
                  <td>{employee.experience}</td>

                  <td>
                    <Link to={`/update/${employee._id}`}>
                      <MDBBtn color="primary" rounded size="sm">
                        Edit
                      </MDBBtn>
                    </Link>
                  </td>
                  <td>
                    <MDBBtn
                      onClick={() => handleDelete(employee._id)}
                      color="danger"
                      rounded
                      size="sm"
                    >
                      Detele
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            ))
        )}

        {/* {paginatedEmployees
          .filter((employee) => {
            return dropDownItem === null
              ? employee
              : employee.employeeType.includes(dropDownItem);
          })
          .map((employee, index) => (
            <MDBTableBody key={index}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="fw-bold mb-1">{employee.displayName}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{employee._id}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{employee.designation}</p>
                </td>
                <td>{employee.employeeType}</td>
                <td>{employee.experience}</td>

                <td>
                  <Link to={`/update/${employee._id}`}>
                    <MDBBtn color="primary" rounded size="sm">
                      Edit
                    </MDBBtn>
                  </Link>
                </td>
                <td>
                  <MDBBtn
                    onClick={() => handleDelete(employee._id)}
                    color="danger"
                    rounded
                    size="sm"
                  >
                    Detele
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))} */}
      </MDBTable>
      {/* <nav
        style={{ position: "relative", top: "20px" }}
        className="d-flex  justify-content-center"
      >
        <ul className="pagination">
          {pages.map((page, index) => (
            <li
              key={index}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p onClick={() => pagination(page)} className="page-link">
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav> */}
    </div>
  );
}

export default HomePage;
