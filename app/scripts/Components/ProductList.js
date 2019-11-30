import React from "react";
import Product, { productPropType } from "./Product";
import PropTypes from "prop-types";

const shownProducts = 4;

const toProductItem = (product) =>
    <Product product={product} />;

const toProductItems = (products) =>
    products
        .slice(0, shownProducts)
        .map(p => toProductItem(p));

const ProductList = ({ products }) => (
    <div className="products">
        {toProductItems(products)}
    </div>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(productPropType).isRequired
};

export default ProductList;
