import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      {cart.length === 0 && <section><article><h1>Your cart is empty</h1></article></section>}
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} className="cart-image" />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
