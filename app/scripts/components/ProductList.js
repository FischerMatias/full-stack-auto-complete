import React from 'react';
import Product from "./Product";

const shownProducts = 4;

const toProductItem = (product) =>
    <Product product={product} />;

const toProductItems = (products) =>
    products
        .slice(0, shownProducts)
        .map(p => toProductItem(p));

const ProductList = ({products}) => (
    <div className="products">
        {toProductItems(products)}
    </div>
);

export default  ProductList;