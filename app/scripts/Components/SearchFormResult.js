import ResultCount, { totalsPropType } from "./ResultCount";
import ProductList from "./ProductList";
import React from "react";
import PropTypes from "prop-types";
import { productPropType } from "./Product";

const SearchFormResultView = ({ res: products, totals }) => (
    <>
        <ResultCount
            totals={totals}
        />
        <ProductList products={products}/>
    </>
);

const Providing =
    ({ data }) =>
        <SearchFormResultView {...data} />;

export const searchResultPropType = {
    res: PropTypes.arrayOf(productPropType).isRequired,
    totals: totalsPropType.isRequired
};

SearchFormResultView.propTypes = searchResultPropType;

Providing.propTypes = {
    data: searchResultPropType
};

export default Providing;
