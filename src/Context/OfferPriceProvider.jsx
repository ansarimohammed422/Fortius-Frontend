import React, { useState } from "react";
import { OfferPriceContext } from "./Context";
export const OfferPriceProvider = ({ children }) => {
  const [offerPrice, setOfferPrice] = useState(null);

  return (
    <OfferPriceContext.Provider value={{ offerPrice, setOfferPrice }}>
      {children}
    </OfferPriceContext.Provider>
  );
};
