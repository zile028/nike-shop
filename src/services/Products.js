import axios from "axios";

const url = "https://raw.githubusercontent.com/Alkibijad/webShop_fake_db/main/nike.json"

class Products {
    static getAll = () => axios.get(url)
}

export default Products;