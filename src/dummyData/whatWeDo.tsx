import icoBigCart from "../assets/images/ico-big-cart.png";
import icoBigShip from "../assets/images/ico-big-ship.png";
import icoBigShop from "../assets/images/ico-big-shop.png";
import icoBigRuler from "../assets/images/ico-big-ruler.png";
interface Data {
  icon: string;
  title: string;
  context: string;
}

export const dataWhatWeDo: Data[] = [
  {
    icon: icoBigCart,
    title: "Shop for latest wears",
    context:
      "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
  },
  {
    icon: icoBigRuler,
    title: "Request for mesurment for a style",
    context:
      "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
  },
  {
    icon: icoBigShop,
    title: "Sell yours wears",
    context:
      "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
  },
  {
    icon: icoBigShip,
    title: "Get your wears delivered to you",
    context:
      "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
  },
];
