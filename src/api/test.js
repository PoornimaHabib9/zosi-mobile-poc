import axios from 'axios';


export const getProducts = async () => {
  return await axios.get("./data/products.json");
}