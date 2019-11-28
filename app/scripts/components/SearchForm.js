import React, {useState} from 'react';

import SearchInput from "./SearchInput";
import useFetchProducts from "../Hooks/useFetchProducts";
import useTimedRunOrReset from "../Hooks/useTimedRunOrReset";
import useClearData from "../Hooks/useClearData";
import SearchFormResult from "./SearchFormResult";

const shownProductsSize = 4;

const SearchFormView = ({ data, onSearchTextChange}) => (
    <form className="search">
        <div className="search-container">
            <SearchInput onTextChange={onSearchTextChange}/>
            { data && data.totals.total > 0 && <SearchFormResult data={data}/> }
        </div>
    </form>
)

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