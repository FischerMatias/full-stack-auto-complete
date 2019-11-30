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

export const searchResultPropType = PropTypes.shape({
    res: PropTypes.arrayOf(productPropType),
    totals: totalsPropType
});

SearchFormResultView.propTypes = {
    res: PropTypes.arrayOf(productPropType),
    totals: totalsPropType
};

Providing.propTypes = {
    data: searchResultPropType
};

export default Providing;
