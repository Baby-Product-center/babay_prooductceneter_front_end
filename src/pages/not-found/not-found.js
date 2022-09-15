import { Link } from "react-router-dom"
import BackgroundImage from '../../assets/images/notFound.jpg'
import React from "react";
const HeaderStyle = {
    width: "120%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const NotFound = () => {
    return (
        <div className="container" style={ HeaderStyle }>
            <div className="product py-2">
                <div className="details p-3">
                    Page not found. Go to{" "}
                    <Link to="/" replace>
                        <button className="primary-button-notFound">Home page</button>
                    </Link>
                    .
                </div>
            </div>
        </div>
    )
}

export { NotFound }
