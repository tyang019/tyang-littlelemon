import { useState } from "react";
import { useCart } from "./CartContext";

function Cart() {
  // 1. Extract values and helper functions individually from our custom hook
  const cartData = useCart();
  const items = cartData.items;
  const total = cartData.total;
  const incrementItem = cartData.incrementItem;
  const decrementItem = cartData.decrementItem;
  const removeItem = cartData.removeItem;
  const clearCart = cartData.clearCart;

  // 2. Local state to track whether the user successfully checked out
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // 3. Checkout handler function
  function handleCheckout() {
    if (items.length === 0) {
      return;
    }
    clearCart();
    setOrderConfirmed(true);
  }

  // 4. Render confirmation message if order is completed
  let confirmationMessage = null;
  if (orderConfirmed === true) {
    confirmationMessage = (
      <p className="order-success" role="status">
        Thank you! Your order has been confirmed.
      </p>
    );
  }

  // 5. Render main content: show empty message OR cart items list
  let mainContent = null;

  if (items.length === 0) {
    mainContent = (
      <section className="empty-cart">
        <p>Add an item from the Order page to get started.</p>
      </section>
    );
  } else {
    // Map each item into a UI card element
    const itemCards = items.map(function (item) {
      // Check if image exists before rendering
      let itemImage = null;
      if (item.image) {
        itemImage = (
          <img src={item.image} alt={item.name} className="cart-image" />
        );
      }

      // Format numeric values explicitly
      const formattedPrice = item.price.toFixed(2);
      const itemSubtotal = (item.price * item.quantity).toFixed(2);

      // Explicit click handler functions for this specific item
      function handleDecrease() {
        decrementItem(item.id);
      }

      function handleIncrease() {
        incrementItem(item.id);
      }

      function handleRemove() {
        removeItem(item.id);
      }

      return (
        <article className="bc_menu" key={item.id}>
          {itemImage}
          <h1>{item.name}</h1>
          <p>Price: ${formattedPrice}</p>

          <section className="quantity-controls">
            <button
              onClick={handleDecrease}
              aria-label={"Decrease " + item.name + " quantity"}
            >
              −
            </button>
            <span aria-live="polite">Quantity: {item.quantity}</span>
            <button
              onClick={handleIncrease}
              aria-label={"Increase " + item.name + " quantity"}
            >
              +
            </button>
          </section>

          <p className="item-subtotal">Subtotal: ${itemSubtotal}</p>

          <button onClick={handleRemove}>
            Remove {item.name}
          </button>
        </article>
      );
    });

    const formattedTotal = total.toFixed(2);

    mainContent = (
      <section>
        <article className="bc_menu">
          {itemCards}
        </article>
          <section >
            <h1>Cart total: ${formattedTotal}</h1>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </section>
      </section>
    );
  }

  // 6. Final UI Return statement
  return (
    <main >
      <section>
        <article>
          <h1>Shopping Cart</h1>
          {confirmationMessage}
          {mainContent}
        </article>
      </section>
      
    </main>
  );
}

export default Cart;