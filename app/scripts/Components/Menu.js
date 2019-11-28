/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import {useFlag} from "../Hooks/useFlag";
import {SearchForm} from "./SearchForm";

const Menu = () => {
    const { flag: searchVisible, toggleFlag: toggleSearch } = useFlag();

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={toggleSearch}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            { searchVisible &&  <SearchForm onCloseClick={toggleSearch}/> }
        </header>
    );
};

export default Menu;