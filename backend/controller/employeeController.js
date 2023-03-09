const mongoose = require("mongoose");
const Employee = require("../model/EmployeeModel");

// create employee

const createEmployee = async (req, res) => {
  const {
    fullName,
    nameWithInitial,
    displayName,
    gender,
    dob,
    email,
    mobileNumber,
    designation,
    joinedDate,
    employeeType,
    experience,
    salary,
    personalNote,
  } = req.body;

  try {
    const employee = await Employee.create({
      fullName,
      nameWithInitial,
      displayName,
      gender,
      dob,
      email,
      mobileNumber,
      designation,
      joinedDate,
      employeeType,
      experience,
      salary,
      personalNote,
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all employees

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find({}).sort({ createdAt: -1 });
  res.status(200).json(employees);
};

// get a Single Employee

const getEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Employee" });
  }

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json("no such Employee");
  }

  res.status(200).json(employee);
};

// update employee
const updateEmployee = async (req, res) => {
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
  } = req.body;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such employee" });
  }

  const employee = await Employee.findByIdAndUpdate(
    { _id: id },
    {
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
    }
  );

  if (!employee) {
    return res.status(400).json({ error: "no such a item to update" });
  }

  res.status(200).json(employee);
};

// /delete employee

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Employee" });
  }

  const employee = await Employee.findByIdAndDelete({ _id: id });

  if (!employee) {
    return res.status(400).json("no such employee to delete");
  }

  res.status(200).json(employee);
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee,
};
