import { useState } from "react"
import { menuItems } from "./features/menu/menuData2";

export default function Specials(){
   const [items, setItems] = useState(menuItems); 
   
  return(
    <section style={{
      backgroundColor: "beige",
      display: "block",
      padding: "1rem",
      }}><article>
        <h1>Specials under $20</h1>
        <hr style={{
          maxWidth: "300px",
          marginLeft: "calc(50% - 200px)", 
          }}/></article>
      {items.length === 0 && <article><h1>No specials available</h1></article>}
      {items.filter(item => item.price < 13).map((category, index) => (
        <article  key = {index}>
          <div style={{
            display: "flex", 
            justifyContent: "start",
            alignItems: "start",
            padding: "1rem",
            marginRight: "1rem",
          }}> 
            <img className="cart-image" src={category.image} alt={category.name} />
            <p>{category.name}...</p>
            <div style={{
              display: "flex",
              flexDirection: "column",
            }}>
               <h3>{category.paragraph}</h3>
                <p style={{
                  justifyContent: "end",
                  marginLeft: "auto",
                  fontWeight: "bold",
                }}>${category.price.toFixed(2)}</p>
            </div>
            </div> 
        </article>
      ))};
    </section>
  )
}