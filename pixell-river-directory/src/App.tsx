import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Employees from "./pages/Employee";
import Organization from "./pages/Organization";

import { employeeRepo } from "./repositories/employeeRepo";

function App() {
  const [departments, setDepartments] = useState(
    employeeRepo.getDepartments()
  );

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/employees"
          element={
            <Employees
              departments={departments}
              setDepartments={setDepartments}
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