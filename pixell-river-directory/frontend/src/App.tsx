
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Employees from "./pages/Employee";
import Organization from "./pages/Organization";


function App() {
  
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/employees"
          element={<Employees />}
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