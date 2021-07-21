import React from 'react';
import "./signin.css";
import { BiLockAlt, BiUser as UserIcons } from "react-icons/bi";
import { Link, useHistory } from 'react-router-dom';

function Signin() {
    const history = useHistory();
    const submitForm = (e) => {
        e.preventDefault();
        history.push("/personal");
    }

    return (
        <div className="backgroundSingin">
            <div className="layoutSignin">
                <h2 className="h2">Sign in</h2>

                <form className="fromSignin" onSubmit={submitForm}>
                    <div className="label">
                        <label htmlFor="username">
                            <UserIcons />
                        </label>
                        <input type="text" id="username" placeholder="Username" name="username" />
                    </div>

                    <div className="label">
                        <label htmlFor="password">
                            <BiLockAlt />
                        </label>
                        <input type="password" id="password" placeholder="Password" name="password" />
                    </div>
                    
                    <div className="forgotPass">
                        <p><Link>Forgot password?</Link></p>
                    </div>
                    <div className="br_signin">
                        <div>0 0 0</div>
                    </div>

                    <button className="bt_signin" type="submit">SIGN IN</button>
                    
                    <div className="logSignin">
                        <p><Link>Create Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;