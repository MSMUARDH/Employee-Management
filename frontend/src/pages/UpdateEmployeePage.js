import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../features/Employees/employeeSlice";

const UpdateEmployeePage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [nameWithInitial, setNameWithInitial] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [personalNote, setPersonalNote] = useState("");

  const { id } = useParams();
  console.log(id);

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    const response = await axios.get(`/api/employee/${id}`);
    const data = await response.data;

    const splitedDob = data.dob.slice(0, 10);
    const splitedJoinedDate = data.joinedDate.slice(0, 10);

    console.log(data.employeeType);

    setFullName(data.fullName);
    setNameWithInitial(data.nameWithInitial);
    setDisplayName(data.displayName);
    setGender(data.gender);
    setDob(splitedDob);
    setEmail(data.email);
    setMobileNumber(data.mobileNumber);
    setDesignation(data.designation);
    setEmployeeType(data.employeeType);
    setJoinedDate(splitedJoinedDate);
    setExperience(data.experience);
    setSalary(data.salary);
    setPersonalNote(data.personalNote);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id,
      fullName,
      nameWithInitial,
      displayName,
      gender,
      dob,
      email,
      mobileNumber,
      designation,
      employeeType,
      joinedDate,
      experience,
      salary,
      personalNote,
    };
    if (
      fullName === "" ||
      nameWithInitial === "" ||
      displayName === "" ||
      gender === "" ||
      dob === "" ||
      email === "" ||
      mobileNumber === "" ||
      designation === "" ||
      employeeType === "" ||
      joinedDate === "" ||
      experience === "" ||
      salary === "" ||
      personalNote === ""
    ) {
      setError("*All fields must be provided");
    } else {
      const response = await axios.put(`/api/employee/` + id, formData);
      console.log(response);
      if (response.statusText == "OK") {
        navigate("/");
      }
    }

    const response = await axios.put(`/api/employee/` + id, formData);
    console.log(response);
    if (response.statusText == "OK") {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className="mb-3">
          <Form.Label className="label-text">Full Name*</Form.Label>
          <Form.Control
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formGridCity" className="mb-3">
            <Form.Label className="label-text">Name with initials*</Form.Label>
            <Form.Control
              onChange={(e) => setNameWithInitial(e.target.value)}
              value={nameWithInitial}
              type="text"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="label-text">
              Preferred / Display Name
            </Form.Label>
            <Form.Control
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              type="text"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="label-text">Gender</Form.Label>
            <Form.Select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value=""> Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="label-text">Date of Birth</Form.Label>
            <Form.Control
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              type="date"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="label-text">Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="label-text">Mobile Number</Form.Label>
            <Form.Control
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
              type="number"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="label-text">Designation</Form.Label>
            <Form.Control
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
              type="text"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="label-text">Employee Type</Form.Label>
            <Form.Select
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
            >
              <option value="">Choose Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract Basis">Contract Basis</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="label-text">Joined Date</Form.Label>
            <Form.Control
              onChange={(e) => setJoinedDate(e.target.value)}
              value={joinedDate}
              type="date"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="label-text">Experience</Form.Label>
            <Form.Select value={experience}>
              <option onChange={(e) => setExperience(e.target.value)} value="">
                Choose experience
              </option>
              <option value="01 Year">01 Year</option>
              <option value="02 Years">02 Year</option>
              <option value="03 Years">03 Year</option>
              <option value="04 Years">04 Year</option>
              <option value="05 Years">05 Year</option>
              <option value="06 Years">06 Year</option>
              <option value="07 Years">07 Year</option>
              <option value="08 Years">08 Year</option>
              <option value="09 Years">09 Year</option>
              <option value="10 Years">10 Year</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label className="label-text">Salary</Form.Label>
            <Form.Control
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}></Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="label-text">Personal Notes</Form.Label>
          <Form.Control
            onChange={(e) => setPersonalNote(e.target.value)}
            value={personalNote}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        {error !== "" ? (
          <span className="align-center text-danger">{error}</span>
        ) : (
          ""
        )}

        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
          </Link>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateEmployeePage;
