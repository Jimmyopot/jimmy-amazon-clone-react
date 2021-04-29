import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);

    return (
        <nav className="header">

            {/* logo on left */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                />
            </Link>

            {/* search box */}
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links right */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Greyfish</span>
                        <span>Sign in</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineThree">Your</span>
                        <span>Prime</span>
                    </div>
                </Link>
            </div>

            {/* basket icon with numbers */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon />

                    {/* no. of items in basket */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header


// <Link></Link> does not refresh
// <a href /></a> refreshes