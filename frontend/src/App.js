import { Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AddPeoplePage from "./pages/AddPeoplePage";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";


function App() {
  return (
    <div className="m-5">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdateEmployeePage />} />
        <Route path="/form" element={<AddPeoplePage />} />
      </Routes>
    </div>
  );
}

export default App;
