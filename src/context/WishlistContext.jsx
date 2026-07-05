import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishItems, setWishItems] = useState([]);

  function addToWishlist(product) {
    setWishItems([...wishItems, product]);
  }

  function removeFromWishlist(index) {
    setWishItems(wishItems.filter((item, i) => i !== index));
  }

  return (
    <WishlistContext.Provider
      value={{ wishItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
