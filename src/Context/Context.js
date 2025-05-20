import { createContext } from "react";

export const TestSelection = createContext(0)
export const OfferPriceContext = createContext({
    offerPrice: null,
    setOfferPrice: () => {},
  });