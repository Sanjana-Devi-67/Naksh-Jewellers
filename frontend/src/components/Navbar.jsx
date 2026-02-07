import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <h2 className="logo">NAKSH GOLD</h2>

        <div className="nav-links">
          <Link to="/">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
