import React from "react";

function Home (props) {
    console.log("props",props);
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://mpng.subpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>Add To cart</button>

                <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler({})}>Remove To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home