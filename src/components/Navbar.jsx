import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🩸 Blood Donor Management System
      </div>

      <ul>

        <li>
          <Link to="/dashboard">
            📊 Dashboard
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;