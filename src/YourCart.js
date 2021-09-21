export const YourCart = ({ cart }) => {
    const renderProductsInCart = () => {
        const productsInCart = cart.map((product) => {
            return <div key={product.id}>

            </div>
        })
    }
    return (<div>  </div>);
}