import { useState, useEffect } from "react";
import { menuItems } from "./menuData2";
import "./index.css";

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

 function addToCart(){

 }
  return (
    <section className="order-page">
        <article>
          <h1>Order Items</h1>
           
              {menuItems.map((item, index) => (
                    <article key={index} className="menuText">
                       <h1 style={{fontSize: "2rem", margin: "1rem"}}>{item.name}<hr 
            style={{
              width: "auto", 
              margin: "0 auto", 
              maxWidth: "90%", 
              height: "2px", 
              backgroundColor: "black", 
              border: "none" }}></hr></h1>
            <h3>
              <img className="imgResize" alt=""></img>
              </h3>
                      <img src={item.image} alt={item.name} />
                      <p>{item.paragraph}</p>
                      <p>{item.calories} calories</p>
                      <strong>${item.price.toFixed(2)}</strong>
            
                      <button onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                    </article>
                  ))}
          </article>


      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
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
