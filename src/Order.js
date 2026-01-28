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
    <div>
    <section>
      <article><h1>Order Items</h1></article>
      <article className="menu_items2">
          {menuItems.map((item, index) => (
            <div className="bc_menu">
               <h1 style={{fontSize: "2rem", margin: "1rem"}}>{item.name}<hr 
                    style={{
                      width: "auto", 
                      margin: "0 auto", 
                      maxWidth: "90%", 
                      height: "1px", 
                      backgroundColor: "black", 
                      border: "none" }}></hr></h1>
                    <p>{item.calories} calories</p>
                    <img src={item.image} alt={item.name} />
                      <p className="menu_description">{item.paragraph}</p>
                      <strong>${item.price.toFixed(2)}</strong>
                        <button className="menuBtn" onClick={() => addToCart(item)}>
                          Add to Cart
                        </button>
            </div>
      ))}

      {cart.length === 0 ? (
        <h1>Your cart is empty.</h1>
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
                <h1>${item.price.toFixed(2)}</h1>

                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}
          </div>

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
      </article>
    </section>
  </div>
  );
}

export default Order;
