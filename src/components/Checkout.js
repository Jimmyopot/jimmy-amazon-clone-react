import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeX5sn8smjN2ejLdsmMnwTFGgCSpabBKhRw&usqp=CAU"
                    alt=""
                />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket"
                            next to the item.
                        </p>
                    </div>
                ) : (
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>

                        {/* list all checkout products */}
                        {basket?.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div> 

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
