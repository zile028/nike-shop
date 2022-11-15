import axios from "axios";

const url = "https://raw.githubusercontent.com/Alkibijad/react-nike/main/db.json"

class Products {
    static getAll = () => axios.get(url)
}

export default Products;