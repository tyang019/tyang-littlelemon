import { useState, useEffect } from "react";

function Order() {
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

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="order-page">
      <h1>Your Order</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>

                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}
          </div>

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </section>
  );
}

export default Order;
