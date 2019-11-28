import {useFetch} from "react-async";

const useFetchProducts = ({size, searchText}) =>
    useFetch(`http://localhost:3035?size=${size}&searchText=${searchText}`, {
        headers: {
            Accept: "application/json",
        },
    }, { defer: true });

export default useFetchProducts;