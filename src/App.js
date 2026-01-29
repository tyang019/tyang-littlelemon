import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Nav";
import Home from "./Home";
import Menu from "./Menu";
import Search from "./Search";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Percent from"./Percent";
import Specials from "./Specials";
import Main from "./Main";
import ConfirmedBooking from "./ConfirmedBooking";

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
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchBar" element={<SearchBar />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<Main />}/>
        <Route path="/specials" element={<Specials />} />
        <Route path="/percent" element={<Percent />} />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />}/>
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
};

export default App;
