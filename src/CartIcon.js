import React from "react";

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon">
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartIcon;
