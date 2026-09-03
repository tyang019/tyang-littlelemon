import "../index.css";
import profilePic from "../assets/profile-picture (1).png";
import cartIcon from "../assets/shopping-cart.png";
import logo from "../assets/Asset 16@4x.png";
import { Link } from "react-router-dom";
import CartIcon from "../features/cart/CartIcon";
import { useCart } from "../features/cart/CartContext";


function Header() {
  const { itemCount } = useCart();//useCart hook to access itemCount state from CartContext, allowing the component to display the current number of items in the cart
  return (
    <header>
      <a href="/">
        <img
          className="logo"
          src={logo}
          alt="Little Lemon logo"
        />
      </a>
      <article className="header-right">
        <div className="header-actions">
          <article className="search-bar-position">
          <input
            id="input"
            className="search_bar"
            placeholder="Search"
            type="text"
          />
          <button className="search-button">Search</button>
        </article>
        <Link to="/user">
          <img
            className="header-icon"
            src={profilePic}
            alt="User profile"
          />
        </Link>
         <Link to="/cart" className="cart-link" aria-label="View shopping cart">
            <img
            id="cartLogo"
            className="header-icon"
            src={cartIcon}
            alt="Shopping cart"
          />   
          <CartIcon cartCount={itemCount} />       
        </Link>
      </div>
      </article>
    </header>
  );
}
export default Header;
