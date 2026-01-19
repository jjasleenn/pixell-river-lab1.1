import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import { departments } from "./Data/Employees";

function App() {
  return (
    <>
      <Header />

      <main>
        {departments.map((dept) => (
          <Department key={dept.name} department={dept} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
