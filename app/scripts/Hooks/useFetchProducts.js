import { useFetch } from "react-async";

const useFetchProducts = ({ shownProductsSize, searchText }) =>
    useFetch(`http://localhost:3035?shownProductsSize=${shownProductsSize}&searchText=${searchText}`, {
        headers: {
            Accept: "application/json"
        }
    }, { defer: true });

export default useFetchProducts;
