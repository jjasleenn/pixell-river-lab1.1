import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Pixell River Financial</h1>

      <nav>
        <Link to="/employees">Employees</Link> |{" "}
        <Link to="/organization">Organization</Link>
      </nav>
    </header>
  );
}

export default Header;
