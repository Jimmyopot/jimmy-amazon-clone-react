import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct__image" 
                src={image} 
                alt="" 
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>
                                <img 
                                    className="checkoutProduct__ratingImage"
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                            </p>

                        ))
                    }
                </div>

                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

