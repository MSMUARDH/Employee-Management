const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    nameWithInitial: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    employeeType: {
      type: String,
      required: true,
    },
    joinedDate: {
      type: Date,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    personalNote: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
