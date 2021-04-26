import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://rutherfordsource.com/wp-content/uploads/2019/08/whats-new-to-streaming2.jpg"
                alt=""
            />
            
            {/* products: id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id=""
                    title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)"
                    price={639}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61vflt1U5gL._AC_UY545_FMwebp_QL65_.jpg"
                />
                <Product 
                    id=""
                    title="This is Marketing: You Can't Be Seen Until You Learn to See"
                    price={8.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51UYILvuvtL._SX352_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id=""
                    title="SweatyRocks Sweatshirt Pullover Fleece Drop Shoulder Striped Hoodie"
                    price={23}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/718wsxGp-TL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product 
                    id=""
                    title="Resfeber Women's Ripped Boyfriend Jeans Cute Distressed Jeans Stretch Skinny Jeans with Hole"
                    price={49.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61K5KPwwrBL._AC_UL960_QL65_.jpg"
                />
                <Product 
                    id=""
                    title="Lenovo IdeaCentre AIO 3, Integrated Graphics, 16GB DDR4, 512GB M.2 Name SSD, Windows 10"
                    price={799}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81eRAX3sB6L._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id=""
                    title="Hisense 43-Inch Class R6090G Roku 4K UHD Smart TV with Alexa Compatibility (43R6090G, 2020 Model)"
                    price={239}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81kqOmORQ8L._AC_UY436_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
