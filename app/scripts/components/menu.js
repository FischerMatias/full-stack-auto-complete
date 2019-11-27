/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            showingSearch: false
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        
        // Start Here
        // ...
        

    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
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

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <form className={(this.state.showingSearch ? "showing " : "") + "search"}>
                    <div className="search-container">
                        <input type="text"
                               name="search"
                               id="search"
                               className="search-field"
                               placeholder="Enter Search Term"
                               aria-label="Enter Search Term"
                               autoComplete="off"
                        />
                        <div className="shown-results" aria-live="assertive">
                            <a className="results-display">
                               <span className="search-count">
                                 Displaying 4 of 15 Results
                               </span>
                            </a>
                        </div>
                        <div className="products">
                            <div className="product">
                                <img className="product-image"
                                     src="http://testcreative.co.uk/wp-content/uploads/2018/08/Test-Twitter-Icon.jpg">
                                </img>
                                <div className="product-body">
                                    <h4 className="product-name">Prep + Prime Skin Refined Zone</h4>
                                    <div className="product-description">
                                        Minimizes Pores, Mattifying, Controls Oil <div className="product-price">
                                        20.00
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;