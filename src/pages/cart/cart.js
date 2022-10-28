import { Link } from "react-router-dom"
import { useCart } from "../../context/cart"
import "./cart.css"
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SHIPPING_CHARGES = 25
const MySwal = withReactContent(Swal);
const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }



    const publishableKey =
        'pk_test_51LgXJdSDmFBknNFOqB2kq2HzScVWiF4IKKH8fNHQDPLbhwQbhgvfPCibmDR8tH0YlkZuZAkzb0wnboLGVIdPAOg600hRJpjBTp';
    const [product, setProduct] = useState({
        name: 'Headphone',
        price: 15,
    });
    const priceForStripe = product.price * 100;

    const handleSuccess = () => {
        MySwal.fire({
            icon: 'success',
            title: 'Payment was successful',
            time: 4000,
        });
    };
    const handleFailure = () => {
        MySwal.fire({
            icon: 'error',
            title: 'Payment was not successful',
            time: 4000,
        });
    };
    const checked = () => {
       alert("clicke")
    };
    const payNow = async token => {
        console.log(token)
        try {
            const response = await axios({
                url: 'http://localhost:5000/payment',
                method: 'post',
                data: {
                    amount: product.price * 100,
                    token,
                },
            });
            if (response.status === 200) {
                handleSuccess();
            }
        } catch (error) {
            handleFailure();
            console.log(error);
        }

    };

console.log("c",cart)
    return (
        <div className="cartWrapper">
            <div className="container">
                {cart.length >= 1 ? (
                    <div className="grid my-5">
                        <div className="cartItem p-3">
                            <h2>Order Summary</h2>
                            {cart.map((item) => (
                                <div className="item" key={item.product.product_id}>
                                    <div className="grid py-3">
                                        <div className="itemImage">
                                            <img src={item.product.image} alt="" />
                                        </div>
                                        <div className="itemDesc">
                                            <div className="title">
                                                <Link to={"/product/" + item.product.product_id} className="titleLink">
                                                    {item.product.product_Name}
                                                </Link>
                                            </div>
                                            <span className="price">${round(item.product.price * item.quantity, 2)}</span>
                                            {/* <div className="remove">Remove</div> */}
                                        </div>
                                        <div className="itemControl flex">
                                            <div>
                                                <button
                                                    onClick={() => increaseQuantity(item.product.product_id)}
                                                    className="addQty"
                                                >
                                                    +
                                                </button>
                                                <span className="mx-1">{item.quantity}</span>
                                                <button
                                                    onClick={() => decreaseQuantity(item.product.product_id)}
                                                    disabled={item.quantity === 1}
                                                    className="removeQty"
                                                >
                                                    -
                                                </button>
                                                <div
                                                    className="remove my-1"
                                                    onClick={() => removeFromCart(item.product.product_id)}
                                                >
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="payment p-3">
                            <h2>Payment Summary</h2>
                            <div className="summary py-3 my-2">
                                <div className="flex py-1">
                                    <span>Subtotal:</span>
                                    <span className="price">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex py-1">
                                    <span>Shipping Fee:</span>
                                    <span className="price">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className=" flex py-1">
                                    <span>Total:</span>
                                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                                </div>
                                <div className=" flex py-1">
                                    <StripeCheckout
                                        stripeKey={publishableKey}
                                        label="Pay Now"
                                        name="Pay With Credit Card"
                                        billingAddress
                                        shippingAddress
                                        amount={priceForStripe}
                                        description={`Your total is $${product.price}`}
                                        token={payNow}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="error">
                        <p>&#9432; Cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export { Cart }
