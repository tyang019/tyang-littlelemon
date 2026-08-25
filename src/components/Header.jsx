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
        <article className="icon-sizes">
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
            className="icon-sizes"
            src={profilePic}
            alt="User profile"
          />
        </Link>
         <Link to="/cart" className="cart-link" aria-label="View shopping cart">
            <img
            id="cartLogo"
            className="icon-sizes"
            src={cartIcon}
            alt="Shopping cart"
          />   
          <CartIcon cartCount={itemCount} />       
        </Link>
      </article>
      </article>
    </header>
  );
}
export default Header;
