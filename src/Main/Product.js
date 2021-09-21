export const Product = ({ product, addProductToCart }) => {

    const onAddToCartClick = () => {
        addProductToCart(product);
    }

    return (
        <div key={product.id}>
            <div className="product-image" />
            <button onClick={onAddToCartClick}>Add to Cart</button>
            <div>
                    <span>
                        {product.name}
                    </span>
                <div>
                    {product.unitPrice} {product.currency}
                    <small>Units: {product.units}</small>
                </div>
            </div>
        </div>
    )
}