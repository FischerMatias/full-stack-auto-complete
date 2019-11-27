import React from 'react';

import SearchInput from "./SearchInput";
import ResultCount from "./ResultCount";
import ProductList from "./ProductList";
import {useAsync} from "react-async";

const SearchFormResult = ({metadata, products}) =>(
    <>
        <ResultCount
            metadata={{
                shown: 1,
                total: 3,
            }}
        />
        <ProductList products={products}/>
    </>
)

const SearchFormView = ({products, onSearchInputChange}) => (
    <form className="search">
        <div className="search-container">
            <SearchInput onChange={onSearchInputChange}/>
            { products && <SearchFormResult products={products} /> }
        </div>
    </form>
)

const Connected = () => {
    const onSearchInputChange =
        ({ target: { value } }) => {
            if (value.toLowerCase() === "hola")
                run();
        };

    const { data, run } = useAsync({
       deferFn: async (args) =>  Promise.resolve([
           {
               imageSrc: "http://testcreative.co.uk/wp-content/uploads/2018/08/Test-Twitter-Icon.jpg",
               name: "Prep + Prime Skin Refined Zone",
               description: "Minimizes Pores, Mattifying, Controls Oil",
               cost: "20.00"
           }
       ])
    });

    return <SearchFormView products={data} onSearchInputChange={onSearchInputChange} />
}

export const SearchForm = Connected;