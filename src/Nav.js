import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <button>Menu</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
        </li>
        <li>
          <Link to="/order">
            <button>Order Online</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
