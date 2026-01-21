import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Nav";
import Home from "./Home";
import Menu from "./Menu";
import Search from "./Search";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Contact from "./Contact";
import Order from "./Order";

import footerLogo from "./logo/Asset 20@4x.png";

function App() {
  return (
    <>
      {/* Global Layout */}
      <Header />
      <Navigation />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchBar" element={<SearchBar />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div>
          <img className="footer_logo" src={footerLogo} alt="footer logo" />
        </div>
        <div>
          <hr />
          <p className="copyright">
            © Little Lemon Copyright
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
