import axios from "axios";

const http = 'http://localhost:8080/api/product'
export const getAllProduct = async () => {
    const res = await axios.get('http://localhost:8080/api/product/get-all-product');
    return res
}