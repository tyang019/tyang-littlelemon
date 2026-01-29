import './index.css';
import profilePic from "./logo/profile-picture (1).png";
import cartIcon from "./logo/shopping-cart.png";
import logo from "./logo/Asset 16@4x.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="trolley">
        <Link to="/user">
          <img
            className="trolley"
            src={profilePic}
            alt="User profile"
          />
        </Link>
        <Link to="/cart">
            <img
            id="cartLogo"
            className="trolley"
            src={cartIcon}
            alt="Shopping cart"
          />          
        </Link>
      </div>

      <a href="/">
        <img
          className="logo"
          src={logo}
          alt="Little Lemon logo"
        />
      </a>

      <div className="search-bar-position">
        <input
          id="input"
          className="search_bar"
          placeholder="Search"
          type="text"
        />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
