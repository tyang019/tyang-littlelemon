import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

// 1. Create a key for local storage and set up the context object
const CART_STORAGE_KEY = "cart";
const CartContext = createContext(null);

// 2. State management function (Reducer)
export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      // Find if the item is already in the cart
      const existingItem = state.find(function (item) {
        return item.id === action.item.id;
      });

      // If item exists, create a new list with its quantity increased by 1
      if (existingItem) {
        return state.map(function (item) {
          if (item.id === action.item.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }

      // If it's a new item, add it to the end of the list with quantity 1
      return [...state, { ...action.item, quantity: 1 }];
    }

    case "increment": {
      return state.map(function (item) {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }

    case "decrement": {
      // First decrease quantity by 1
      const updatedItems = state.map(function (item) {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      // Then filter out items whose quantity dropped to 0
      return updatedItems.filter(function (item) {
        return item.quantity > 0;
      });
    }

    case "remove": {
      return state.filter(function (item) {
        return item.id !== action.id;
      });
    }

    case "clear": {
      return [];
    }

    default: {
      return state;
    }
  }
}

// 3. Helper function to load saved items safely from localStorage
function restoreCart() {
  try {
    const rawData = localStorage.getItem(CART_STORAGE_KEY);
    const savedCart = JSON.parse(rawData);

    if (!Array.isArray(savedCart)) {
      return [];
    }

    return savedCart.filter(function (item) {
      const hasValidId = typeof item.id === "string" || typeof item.id === "number";
      const hasValidName = typeof item.name === "string";
      const hasValidPrice = Number.isFinite(item.price);
      const hasValidQuantity = Number.isInteger(item.quantity) && item.quantity > 0;

      return item && hasValidId && hasValidName && hasValidPrice && hasValidQuantity;
    });
  } catch (error) {
    return [];
  }
}

// 4. Provider Component to wrap the application
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], restoreCart);

  // Save changes to localStorage whenever the items array changes
  useEffect(function () {
    const stringifiedItems = JSON.stringify(items);
    localStorage.setItem(CART_STORAGE_KEY, stringifiedItems);
  }, [items]);

  // Compute calculated metrics and helper actions
  const value = useMemo(function () {
    // Calculate total count of items
    const itemCount = items.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);

    // Calculate total dollar price
    const total = items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);

    // Helper functions that trigger dispatch actions
    function addItem(item) {
      dispatch({ type: "add", item: item });
    }

    function incrementItem(id) {
      dispatch({ type: "increment", id: id });
    }

    function decrementItem(id) {
      dispatch({ type: "decrement", id: id });
    }

    function removeItem(id) {
      dispatch({ type: "remove", id: id });
    }

    function clearCart() {
      dispatch({ type: "clear" });
    }

    return {
      items: items,
      itemCount: itemCount,
      total: total,
      addItem: addItem,
      incrementItem: incrementItem,
      decrementItem: decrementItem,
      removeItem: removeItem,
      clearCart: clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 5. Custom Hook to easily access cart context in components
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}