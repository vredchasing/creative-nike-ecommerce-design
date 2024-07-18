import ProductCards from "../Components/ProductCards"
import { useEffect, useState } from "react"
import products from "../Data/products"

function Shop (){


    let quantityPerRow = 3

    const [productsRow,setProductsRow]= useState([])

    function sliceArrayIntoRows (array, rowLength){
        let rows = []
        for(let i= 0; i<array.length ; i+=rowLength){
            let rowToAppend = array.slice(i, i+rowLength)
            rows.push(rowToAppend)
        }
        setProductsRow(rows)
    }
    
    useEffect(()=>{
        sliceArrayIntoRows(products, quantityPerRow)
    }, [products, quantityPerRow])


    // Add to cart button
    const [userCart, setUserCart] = useState([])

    function addToCart(product, index){
        const cartToBeAdded = {productName: product.productName, productPrice: product.productPrice, productQuantity:1}
        setUserCart(prevCart => [...prevCart, cartToBeAdded])
    }

    return(
        <section className="shop-section-wrapper">
            <div className="product-cards-wrapper">
                {productsRow.map((productsRowMap, rowIndex)=>{
                    return(
                        <div key={rowIndex} className="products-row-wrapper">
                            {productsRowMap.map((product, index)=>{
                                return(
                                    <ProductCards key={index} product={product} index={index}></ProductCards>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Shop