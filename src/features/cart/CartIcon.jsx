const CartIcon = ({ cartCount }) => {
  return (
     <span className="cart-count" aria-label={`${cartCount} items in cart`}>
      {cartCount}
    </span>
  );
};

export default CartIcon;
