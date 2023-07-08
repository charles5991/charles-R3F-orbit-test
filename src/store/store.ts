import { create } from "zustand";
import CBC from "../assets/images/CBC.jpg";
import Cuisine from "../assets/images/cuisine.jpg";
import Zawa from "../assets/images/zawa.jpg";

const STORES = [
  {
    id: 1,
    name: "Charles Ecommerce",
    type: "A Blockchain Ecommerce that support multi kinds of payment",
    image: Zawa,
    positions: [-1, 8, 40],
  },
  {
    id: 2,
    name: "Food 1",
    type: "food",
    image: "",
    positions: [21, 4, 35],
  },
  {
    id: 3,
    name: "Charles Travel",
    type: "A Blockchain online travel agency",
    image: CBC,
    positions: [38, 8, 35],
  },
  {
    id: 4,
    name: "Charles Sphere",
    type: "Provide Blockchain and SEO IT Consulting Service",
    image: Cuisine,
    positions: [38, 8, -35],
  },
  {
    id: 5,
    name: "Food 2",
    type: "food",
    image: "",
    positions: [23, 6, -45],
  },
];

type StoresState = {
  stores: typeof STORES;
  currentStore: (typeof STORES)[number] | null;
  currentColor: string;
  setCurrentStore: (storeId: number | null) => void;
  setCurrentColor: (color: string) => void;
};

const useStores = create<StoresState>()((set) => ({
  stores: STORES,
  currentStore: null,
  currentColor: "#FDF8CA",

  setCurrentStore: (storeId: number | null) => {
    if (storeId === null) {
      return set({ currentStore: null });
    }
    return set({
      currentStore: STORES.find((store) => store.id === storeId),
    });
  },

  setCurrentColor: (color: string) => set({ currentColor: color }),
}));

export default useStores;
