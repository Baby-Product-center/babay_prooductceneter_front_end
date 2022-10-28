import {createSearchParams, Link, useNavigate} from "react-router-dom"
import { useState } from "react"

const NavBar1 = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit1 = () => {
        navigate("/EditProductPage")
    }
    const handleSubmit2 = () => {
        navigate("/order")
    }
    const handleSubmit3 = () => {
        navigate("/previous_order")
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link">
                            <h1 className="brand">Baby Prduct Center</h1>
                        </Link>
                        <div className="formContainer">
                            <form className="search" style={{display:'flex',justifyContent:'space-around'}}>
                                <button type="button" className="search-btn" onClick={handleSubmit1} >
                                    Edit Products
                                </button>
                                <button type="button" className="search-btn" onClick={handleSubmit2} >
                                    Delivered orders
                                </button>
                                <button type="button" className="search-btn" onClick={handleSubmit3} >
                                    Pending Orders
                                </button>
                            </form>
                        </div>
                        {/*<Link to="/cart" className="link headerCart">*/}
                        {/*    <img className="cartImg" src="/cart.svg" alt="cart" />*/}
                        {/*    {cartItemCount > 0 && (*/}
                        {/*        <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>*/}
                        {/*    )}*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar1 }