const express = require("express");
const router = express.Router();

const {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} = require("../controller/employeeController");

router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.delete("/:id", deleteEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
