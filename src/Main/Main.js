import {Products} from "./Products";
import {useState} from "react";
import {YourCart} from "../YourCart";

export const Main = () => {
    const [cart, setCart] = useState([]);
    const [shouldShowYourCart, setShouldShowYourCart] = useState(false);

    const onYourCartClick = () => {
        setShouldShowYourCart(!shouldShowYourCart);
    }

    const addProductToCart = () => {

    }

    return (
       <div className="main">
           <button onClick={onYourCartClick}> Your Cart </button>
           <Products cart={cart} updateCart={setCart} />
           {shouldShowYourCart && (<YourCart cart={cart} />)}
       </div>
    )
}