import React from 'react';

import SearchInput from "./SearchInput";
import ResultCount from "./ResultCount";
import ProductList from "./ProductList";
import { useFetch } from "react-async";

const SearchFormResult = ({metadata, products}) =>(
    <>
        <ResultCount
            metadata={metadata}
        />
        <ProductList products={products}/>
    </>
)

const SearchFormView = ({ metadata, products, onSearchInputChange}) => (
    <form className="search">
        <div className="search-container">
            <SearchInput onChange={onSearchInputChange}/>
            { products && <SearchFormResult products={products} metadata={metadata}/> }
        </div>
    </form>
)

const getMetadata = ({ length }) => ({
   shown: Math.min(4, length),
   total: length
});

const Connected = () => {
    const onSearchInputChange =
        ({ target: { value } }) => {
            if (value.toLowerCase() === "hola")
                run();
        };

    const { data, run } = useFetch(`http://localhost:3035`, {
        headers: {
            Accept: "application/json",
            'Access-Control-Allow-Origin': "*",
        },
    }, { defer: true });

    return <SearchFormView metadata={data && getMetadata(data)} products={data} onSearchInputChange={onSearchInputChange} />
}

export const SearchForm = Connected;