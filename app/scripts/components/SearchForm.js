import React, {useState} from 'react';

import SearchInput from "./SearchInput";
import useFetchProducts from "../Hooks/useFetchProducts";
import useTimedRunOrReset from "../Hooks/useTimedRunOrReset";
import useClearData from "../Hooks/useClearData";
import SearchFormResult from "./SearchFormResult";

const shownProductsSize = 4;

const SearchCloseButton =
    ({ onClick }) =>
        <a className="close" onClick={onClick} />;

const SearchFormView = ({ data, onSearchTextChange, onCloseClick }) => (
    <form className="search">
        <div className="search-container">
            <SearchInput onTextChange={onSearchTextChange}/>
            <SearchCloseButton onClick={onCloseClick}/>
            { data && data.totals.total > 0 && <SearchFormResult data={data}/> }
        </div>
    </form>
)

const Connected = ({ onCloseClick }) => {
    const [searchText, setSearchText] = useState("");
    const { data, run, setData } = useFetchProducts({
        size: shownProductsSize,
        searchText
    });

    useTimedRunOrReset(run, searchText.length > 2, [searchText]);
    useClearData(searchText.length <= 2, setData, [searchText]);

    return <SearchFormView
        data={data}
        onSearchTextChange={setSearchText}
        onCloseClick={onCloseClick}
    />;
};

export const SearchForm = Connected;