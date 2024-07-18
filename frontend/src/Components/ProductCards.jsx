function ProductCards({product, index}){

    return(
        <div className="product-cards-container">
            <div className="product-image-container">
                <img className="product-image" src={product.productImages.img1}></img>
            </div>
            <div className="product-info-container">
                <div className="product-name-container">
                    <h2 className="product-name">{product.productName}</h2>
                </div>
                <div className="product-price-container">
                    <h3 className="product-price">${product.productPrice}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCards