import axios from "axios";

const url =
  "https://raw.githubusercontent.com/Alkibijad/react-nike/main/db.json";

class Products {
  static getAll = () => axios.get(url);
  static getFavorits = (favorit) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then((data) => {
        resolve(
          data.data.shop.products.filter((el) => favorit.includes(el.id))
        );
      });
    });
  };
}

export default Products;
