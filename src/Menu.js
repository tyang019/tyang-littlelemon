import { menuItems2 } from "./menuData";

function Menu() {
  return (
    <div className="menu_items">
      {menuItems2.map((category, index) => (
        <section key={index}>
          <article className="menuText">
            <h1>{category.category}</h1>
            <hr />

            <img
              src={category.img}
              alt={category.category}
              className="imgResize"
            />

            <div>
              {category.items.map((item, i) => (
                <p key={i}>
                  {item.name}..........  ${item.price}
                </p>
              ))}
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}

export default Menu;
