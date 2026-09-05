import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul >
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
            <button>Order here</button>
          </Link>
        </li>
        <li>
          <Link to="/book">
            <button>Book Table</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
