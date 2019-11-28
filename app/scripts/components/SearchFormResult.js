import ResultCount from "./ResultCount";
import ProductList from "./ProductList";
import React from "react";

const SearchFormResultView = ({res: products, totals}) => (
    <>
        <ResultCount
            totals={totals}
        />
        <ProductList products={products}/>
    </>
)

const Providing =
    ({data}) =>
        <SearchFormResultView {...data} />;

export default Providing;