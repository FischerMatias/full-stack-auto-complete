import React from 'react';
import Product from "./Product";

const toProductItem = (product) =>
    <Product product={product} />;

const toProductItems = (products) =>
    products.map(p => toProductItem(p));

const ProductList = ({products}) => (
    <div className="products">
        {toProductItems(products)}
    </div>
);

export default  ProductList;