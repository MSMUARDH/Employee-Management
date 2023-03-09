import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./UserForm.css";
import { Link, useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nameWithInitial, setNameWithInitial] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmai] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setsalary] = useState("");
  const [personalNote, setPersonalNote] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
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
      setError("All fields must be provided");
    } else {
      const response = await axios.post("/api/employee/", data);
      console.log(response);
      setError("");
      console.log(data);
      if (response.statusText == "OK") {
        navigate("/");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-10">
      <Form.Group as={Col} className="mb-3">
        <Form.Label className="label-text">Full Name*</Form.Label>
        <Form.Control
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="formGridCity" className="mb-3">
          <Form.Label className="label-text">Name with initials*</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNameWithInitial(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="label-text">
            Preferred / Display Name
          </Form.Label>
          <Form.Control
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="label-text">Gender</Form.Label>
          <Form.Select onChange={(e) => setGender(e.target.value)}>
            <option value=""> Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        {/* //!below code for datepicker */}

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label className="label-text">Date of Birth</Form.Label>
          <Form.Control onChange={(e) => setDob(e.target.value)} type="date" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="label-text">Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmai(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className="label-text">Mobile Number</Form.Label>
          <Form.Control
            onChange={(e) => setMobileNumber(e.target.value)}
            type="number"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="label-text">Designation</Form.Label>
          <Form.Control
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="label-text">Employee Type</Form.Label>
          <Form.Select onChange={(e) => setEmployeeType(e.target.value)}>
            <option value="">Choose Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract Basis">Contract Basis</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* //! below code for a date picker */}
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="label-text">Joined Date</Form.Label>
          <Form.Control
            onChange={(e) => setJoinedDate(e.target.value)}
            type="date"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="label-text">Experience</Form.Label>
          <Form.Select onChange={(e) => setExperience(e.target.value)}>
            <option value="">Choose experience</option>
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
            type="number"
            onChange={(e) => setsalary(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <Form.Group as={Col}></Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="label-text">Personal Notes</Form.Label>
        <Form.Control
          onChange={(e) => setPersonalNote(e.target.value)}
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
        <Link to={`/`}>
          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Cancel
          </Button>
        </Link>

        <Button variant="primary" type="submit">
          Add People
        </Button>
      </div>
    </Form>
  );
}

export default UserForm;
