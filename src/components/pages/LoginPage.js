
import { Link } from 'react-router-dom'

import React, { useState, useRef } from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';

import '../../App.css'

// export default function SignInPage()
const SignInPage = () =>{

    let navigate = useNavigate();

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onusername = (e) => {
        const username = e.target.value;
        setusername(username);
    };
    const onpassword = (e) => {
        const password = e.target.value;
        setpassword(password);
    };

    const handlelogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);



            AuthService.login(username, password).then(
                () => {
                    navigate("/");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );

    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handlelogin}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required value={username} onChange={onusername} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required value={password} onChange={onpassword}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First timee? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
export { SignInPage }
