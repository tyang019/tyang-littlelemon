import { menuItems } from "../menu/menuData2";
import { useCart } from "../cart/CartContext";
import "../../index.css";

function Order() {
 const {addItem, itemCount} = useCart(); //useCart hook to access addItem function and itemCount state from CartContext, allowing the component to add items to the cart and display the current number of items in the cart
 
 let cartStatus = "(Cart Empty)"; //initialize cartStatus variable to display cart status
  if (itemCount === 1) {
      cartStatus = ("1 item in cart"); //if itemCount is 1, set cartStatus to "1 item in cart"
    }else if (itemCount > 1) {
      cartStatus = itemCount + " items in cart"; //if itemCount is greater than 1, set cartStatus to "X items in cart"
    }

 const addToCart = (item) => {//add to cart function that takes an item as an argument and calls the addItem function from the useCart hook to add the item to the cart
  addItem({
      id: item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),//a deterministic ID based on the item name rather than an array index ensures that clicking "Add to Cart" on the same item multiple times will target the same ID, allowing the reducer to increment the quantity of an existing cart item rather than creating duplicate entries
      name: item.name, //calls the name of the item from the menuData2.js file
      price: item.price,//calls the price of the item from the menuData2.js file
      image: item.image,//calls the image of the item from the menuData2.js file
 })
};

  return (
    <div>
    <section>
      <article>  
       <h1>
          Order Items
          <hr style={{ color: "black", width: "30rem" }} />
      </h1>  
        <p aria-live="polite">
          {cartStatus} {/*display the cart status*/}
        </p>
      </article>
      <article className="menu_items2">
          {menuItems.map((item) => (
            <div className="bc_menu" key={item.name}>
              <h1 style={{ fontSize: "2rem", margin: "1rem" }}>
                {item.name}
                <hr style={{
                  width: "auto",
                  margin: "0 auto",
                  maxWidth: "90%",
                  height: "1px",
                  backgroundColor: "black",
                  border: "none",
                }} />
              </h1>
              <p>{item.calories} calories</p>
              <img className="menu-image" src={item.image} alt={item.name} />
              <p className="menu_description">{item.paragraph}</p>
              <strong>${item.price.toFixed(2)}</strong>
              <button
                className="menuBtn"
                onClick={() => addToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
      ))}
      </article>
       
    </section>
  </div>
  );
}
export default Order;
