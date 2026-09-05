import { useState } from "react"
import { menuItems } from "./features/menu/menuData2";

export default function Specials(){
   const [items, setItems] = useState(menuItems); 
   
  return(
    <section>
      <article>
        <h1>Specials under $20</h1>
      {items.length === 0 && <article>
        <h1>No specials available</h1></article>}
      {items.filter(item => item.price < 13).map((category, index) => (
        <article  key = {index} className="bc_menu">
          <article style={{
            display: "grid", 
            justifyContent: "start",
            alignItems: "start",
            padding: "0.5rem",
            marginRight: "1rem",
          }}> 
            <img className="cart-image" src={category.image} alt={category.name} />
            <p>{category.name}...</p>
              <article style={{
                display: "grid",
                gridTemplateColumns: "1fr",
              }}>
                <h3>{category.paragraph}</h3>
                  <p style={{
                    justifyContent: "end",
                    marginLeft: "auto",
                    fontWeight: "bold",
                  }}>${category.price.toFixed(2)}</p>
              </article>
            </article> 
        </article>
      ))};
      </article>
    </section>
  )
}