import { useParams } from "react-router-dom"
import products from "../Data/products"

function ProductPage(){

    let {productID} = useParams()

    const productFound = products.find(product =>product.productID == productID)

    if(productFound){
        console.log(productFound)
        return(
            <section className="product-page-wrapper">
                <div className="product-page-info-wrapper">
                    <div className="product-page-info-left-wrapper">
                        <div className="product-images"></div>
                        <div className="product-image-main">
                            <img src={productFound.productImages.img1}></img>
                        </div>
                    </div>
                    <div className="product-page-info-right-wrapper">

                    </div>
                </div>
            </section>
        )
    }
    else {

    }

}

export default ProductPage