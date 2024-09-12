import { useParams } from "react-router-dom"
import { useState } from "react"
import products from "../Data/products"

function ProductPage(){

    let {productID} = useParams()
    const [selectedProductIndex, setSelectedProductIndex] = useState(0)

    const productFound = products.find(product =>product.productID == productID)
    console.log(productFound)

    const selectedVersion = productFound.productVersions[selectedProductIndex].productImages
    const imgsObjToArray = Object.values(selectedVersion)
    console.log(imgsObjToArray)


    const CreateSmallProductImages = ({image}) =>{
        return (
            <div className="product-images-small-container">
                <img src={image} className="product-image-small"></img>
            </div>
        )
    }

    const CreateColorOptions = ({image, index})=>{
        return(
            <div className="product-colors-container">
                <img src={image} className="product-colors-image"></img>
            </div>
        )
    }

    if(productFound){
        return(
            <section className="product-page-wrapper">
                <div className="product-page-info-wrapper">
                    <div className="product-page-info-left-wrapper">
                        <div className="product-images-small-wrapper">
                            {imgsObjToArray.map((image, index)=>{
                                return(
                                    <CreateSmallProductImages key={index} image={image} index={index}></CreateSmallProductImages>
                                )
                            })}
                        </div>
                        <div className="product-image-main-container">
                            <img src={productFound.productVersions[selectedProductIndex].productImages.img1} className="product-image-main"></img>
                        </div>
                    </div>
                    <div className="product-page-info-right-wrapper">
                            <div className="product-info1">
                                <div className="product-name-container-page">
                                    <h1 className="product-name-page">{productFound.productName}</h1>
                                </div>
                                <div className="product-price-container">
                                    <h1 className="product-price">${productFound.productPrice}</h1>
                                </div>
                            </div>
                            <div className="product-colors-wrapper">
                                {productFound.productVersions.map((version, index)=>{
                                    return(
                                        <CreateColorOptions image={version.productImages.img1}></CreateColorOptions>
                                    )
                                })}
                            </div>
                    </div>
    
                </div>
            </section>
        )
    }
    else {

    }

}

export default ProductPage