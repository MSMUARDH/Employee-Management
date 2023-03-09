import axios from "axios";

const API_URL = "/api/employee/";

const createEmployee = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};

const getAllEmployee = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getEmployee = async (employeeId) => {
  const response = await axios.get(API_URL + `/${employeeId}`);
  return response.data;
};

const deleteEmployee = async (employeeId) => {
  console.log(employeeId);
  const response = await axios.delete(API_URL + `/${employeeId}`);
  console.log(response.data);
  return response.data;
};

const updateEmployee = async (employeeData) => {
  const {
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
  } = employeeData;
  const data = {
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

  const response = await axios.put(API_URL + `/${id}`, data);
  return response.data;
};

const employeeService = {
  createEmployee,
  getAllEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
};

export default employeeService;
