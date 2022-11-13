import React from "react";

function Header (props) {
    console.log("Home",props.data);
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://i.pinimg.com/736x/00/9b/74/009b744ac549aca64fc353fba90412d4.jpg" />
            </div>
        </div>
    )
}

export default Header