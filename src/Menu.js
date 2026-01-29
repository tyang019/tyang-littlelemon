import { menuItems2 } from "./menuData";

function Menu() {
  return (
    <div>
    <section><article><h1>Menu  <hr style={{
          color: "black",
          width: "30rem",
          }}/></h1></article></section>
    <section className="menu_items">
      {menuItems2.map((category, index) => (
          <article key={index} className="menuText">
            <h1>{category.category} <hr style={{
                      width: "auto", 
                      maxWidth: "100%", 
                      fontSize: "20px",
                      height: "1px", 
                      backgroundColor: "black", 
                      border: "none" }}/></h1>
            <img
              src={category.img}
              alt={category.category}
              className="imgResize"
            />
            <div>
              {category.items.map((item, i) => (
                <p className="descItems" key={i}>
                  {item.name} <div className="descItems2">${item.price}</div>
                </p>
              ))}
            </div>
          </article>
      ))}
    </section>
    </div>
  );
}

export default Menu;
