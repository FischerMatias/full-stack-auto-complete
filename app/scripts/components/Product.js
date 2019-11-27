import React from 'react';

const Product =
    ({product: {
        imageSrc,
        name,
        description,
        cost,
    }}) => (
        <div className="product">
            <img
                className="product-image"
                src={imageSrc}
            />
            <div className="product-body">
                <h4 className="product-name">{name}</h4>
                <div className="product-description">
                    {description}
                    <div className="product-price">
                        {cost}
                    </div>
                </div>
            </div>
        </div>
    )

export default Product;