import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/Employees/employeeSlice";

export const store = configureStore({
  reducer: {
    Employees: employeeReducer,
  },
});
