import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <header>
      <h1>Pixell River Financial</h1>

      <nav>
        <Link to="/employees">Employees</Link> |{" "}
        <Link to="/organization">Organization</Link>
      </nav>

      {/* Auth Section */}
      <div style={{ marginTop: "10px" }}>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;