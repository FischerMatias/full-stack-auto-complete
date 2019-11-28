import React from 'react';

const toCurrencyDisplay =
    (price) =>
        new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(price);

const toCollapsedDescription =
    (about) =>
        about.slice(0, 100) + "...";

const Product =
    ({product: {
        picture,
        name,
        about,
        price,
    }}) => (
        <div className="product">
            <img
                className="product-image"
                src={picture}
            />
            <div className="product-body">
                <h4 className="product-name">{name}</h4>
                <div className="product-description">
                    {toCollapsedDescription(about)}
                    <div className="product-price">
                        {toCurrencyDisplay(price)}
                    </div>
                </div>
            </div>
        </div>
    )

export default Product;