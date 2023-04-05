import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import { Search } from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    const [scrolled, setScreolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScreolled(true);
        } else {
            setScreolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener ("scroll", handleScroll)

    }, [])

    return (
        <header className={`main-header ${scrolled ? 'sticky-header' : ''} `} >
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center"> WebGenius Solutions </div>
                <div className="right"> 
                    <TbSearch />
                    <AiOutlineHeart />
                    <span className="cart-icon">
                        <CgShoppingCart />
                        <span> 5 </span>
                    </span>
                </div>
            </div>
        </header>
    )
};

export default Header;

