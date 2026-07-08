import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export function useShop() {
  return useContext(ShopContext);
}