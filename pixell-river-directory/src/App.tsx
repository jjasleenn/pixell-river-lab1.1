import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Employees from "./pages/Employee";
import Organization from "./pages/Organization";

import { departments as initialDepartments } from "./Data/Employees";

function App() {
  const [departments, setDepartments] = useState(initialDepartments);

  const addEmployee = (firstName: string, departmentName: string) => {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === departmentName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName }]
            }
          : dept
      )
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/employees"
          element={
            <Employees
              departments={departments}
              addEmployee={addEmployee}
            />
          }
        />

        <Route
          path="/organization"
          element={<Organization />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
