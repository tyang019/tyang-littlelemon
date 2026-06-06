import { menuItems } from "./features/menu/menuData2";  

export default function Percent(){  
  return (
    <section>
      <article>
        <h1>Enjoy our delicious dishes at half the price!</h1>

        <hr
          style={{
            color: "black",
            width: "30rem",
            margin: "1rem auto",
          }}
        />

        <p className="message-form">
          Don't miss out on this limited-time offer. Treat yourself to a
          delightful dining experience with our 50% off specials. Whether
          you're craving a savory appetizer, a mouthwatering main course, or a
          delectable dessert, our menu has something for everyone. Hurry in and
          take advantage of this incredible deal before it's gone!
        </p>

        {menuItems
          .filter((item) => item.price > 25)
          .map((category, index) => (
            <article key={index} className="bc_menu">
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  padding: "1rem",
                  marginRight: "1rem",
                }}
              >
                <img
                  className="cart-image"
                  src={category.image}
                  alt={category.name}
                />

                <p style={{ marginLeft: "1rem" }}>{category.name}</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "auto",
                    textAlign: "right",
                  }}
                >
                  {/* Original price */}
                  <p
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      margin: 0,
                    }}
                  >
                    ${category.price.toFixed(2)}
                  </p>

                  {/* Discounted price */}
                  <p className="discount-price">
                    ${(category.price * 0.5).toFixed(2)}
                  </p>
                </div>
              </div>
            </article>
          ))}
      </article>
    </section>
  );
}
