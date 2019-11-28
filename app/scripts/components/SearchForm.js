import React, { useState, useEffect } from 'react';

import SearchInput from "./SearchInput";
import ResultCount from "./ResultCount";
import ProductList from "./ProductList";
import useFetchProducts from "../Hooks/useFetchProducts";

const shownProductsSize = 4;

const SearchFormResult = ({metadata, products}) =>(
    <>
        <ResultCount
            metadata={metadata}
        />
        <ProductList products={products}/>
    </>
)

const SearchFormView = ({ data, onSearchTextChange}) => (
    <form className="search">
        <div className="search-container">
            <SearchInput onTextChange={onSearchTextChange}/>
            { data && data.totals.total > 0 && <SearchFormResult products={data.res} metadata={data.totals}/> }
        </div>
    </form>
)

const useTimedRunOrReset = (runFn, condition, deps) => {
    const [ timed, setTimed] = useState(0);

    useEffect(() => {
        if(condition) {
            if(!timed) {
                setTimed(setTimeout(runFn, 500))
            } else {
                clearTimeout(timed);
                setTimed(setTimeout(runFn, 500))
            }
        }
    }, deps);
};

const useClearData =
    (condition, setDataFn, deps) =>
        useEffect(() => {
            if(condition)
                setDataFn(null);
        }, deps);

const Connected = () => {
    const [searchText, setSearchText] = useState("");
    const { data, run, setData } = useFetchProducts({
        size: shownProductsSize,
        searchText
    });

    useTimedRunOrReset(run, searchText.length > 2, [searchText]);
    useClearData(searchText.length <= 2, setData, [searchText]);

    return <SearchFormView data={data} onSearchTextChange={setSearchText} />
}

export const SearchForm = Connected;