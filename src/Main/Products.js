import {Product} from "./Product";
import {useState} from "react";

const products = [{
    id: "product-1",
    name: "Product 1",
    unitPrice: 30,
    currency: "INR",
    units: "20",
    imgUrl: "",
},
    {
        id: "product-2",
        name: "Product 2",
        unitPrice: 40,
        currency: "INR",
        units: "20",
        imgUrl: "",
    },{
        id: "product-3",
        name: "Product 3",
        unitPrice: 50,
        currency: "INR",
        units: "20",
        imgUrl: "",
    }];

export const Products = ({ cart, updateCart }) => {

    const getProductIndex = (product) => {
        return cart.findIndex(({ id }) => id === product.id);
    }

    const addProductToCart = (product) => {
        const updatedCart = [...cart];
        const productIndex = getProductIndex(product);
        if(productIndex === -1) {
            const updatedProduct = {...product, quantity: 1};
            updatedCart.push(updatedProduct);
            updateCart(updatedCart);
            return;
        }
        updatedCart[productIndex] = { ...product, quantity: (Number(updatedCart[productIndex].quantity) + 1)};
        updateCart(updatedCart);
    }

    const productsToBeRendered = products.map((product) => (
        <Product product={product} addProductToCart={addProductToCart}></Product>
    ));

    return (
        <div className="products">{productsToBeRendered}</div>
    );
}