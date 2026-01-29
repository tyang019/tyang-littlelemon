import starters from "./logo/starters2.jpg";
import mainCourse from "./logo/main-course.jpg";
import desserts from"./logo/desserts.jpg";
import sideSalads from"./logo/sides.jpg";
import beverages from "./logo/beverages (2).jpg";

export const menuItems2 = [
  {
    category: "Starters",
    img: starters,
    items: [
      { name: "Papaya Salad", price: 8.95 },
      { name: "Baked Assorted Vegetables", price: 11.67 },
      { name: "Tom Yum Goong", price: 12.99 },
    ],
  },
  {
    category: "Main Course",
    img: mainCourse,
    items: [
      { name: "Stuffed Turkey", price: 35.95 },
      { name: "Grilled Steak", price: 30.95 },
      { name: "Steamed Fish", price: 25.85 },
    ],
  },
  {
    category: "Desserts",
    img: desserts,
    items: [
      { name: "Banana Ice Cream", price: 23.99 },
      { name: "Strawberry Gelato", price: 19.99 },
      { name: "Greek Yogurt Delight", price: 17.49 },
    ],
  },
  {
    category: "Sides & Salads",
    img: sideSalads,
    items: [
      { name:"Mashed Potato Gravy", price: 24.95},
      { name: "Macaroni Cheese", price: 15.65},
      { name: "Cranberry Spring Salad", price: 13.87},
    ],
  },
  {
    category: "Beverages",
    img: beverages,
    items: [
      { name: "Navam", price: 4.25},
      { name: "Strawberry Cocktail", price: 13.75},
      { name: "Lava Flow", price: 16.95}
    ],
  },
];
