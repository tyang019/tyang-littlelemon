import './index.css';
import profilePic from "./logo/profile-picture.png";
import cartIcon from "./logo/shopping-cart.png";
import logo from "./logo/Asset 16@4x.png";

function Header() {
  return (
    <header>
      <div className="trolley">
        <a href="user.html">
          <img
            className="trolley"
            src={profilePic}
            alt="User profile"
          />
        </a>

        <a href="cart.html">
          <img
            id="cartLogo"
            className="trolley"
            src={cartIcon}
            alt="Shopping cart"
          />
        </a>
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
