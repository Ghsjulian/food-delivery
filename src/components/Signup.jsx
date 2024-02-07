import React, { useState, useRef, useEffect } from "react";
import api from "../__API__.js";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Signup = () => {
  document.title="Create An Account | Signup Now Login | Please Registration Or Create An Account"
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [response, setResponse] = useState({});
    const navigate = useNavigate();
    const errRef = useRef(null);
    const containerRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const btnRef = useRef(null);
    const loadingRef = useRef(null);
    //  useEffect(() => {});
    const SubmitRegistration = e => {
        e.preventDefault();
        if (name === "") {
            containerRef.current.style.border = "1px solid red";
            nameRef.current.style.border = "1px solid red";
            errRef.current.style.display = "block";
            errRef.current.style.border = "1px solid red";
            errRef.current.textContent = "Enter Full Name !";
        } else if (email === "") {
            containerRef.current.style.border = "1px solid red";
            emailRef.current.style.border = "1px solid red";
            errRef.current.style.display = "block";
            errRef.current.style.border = "1px solid red";
            errRef.current.textContent = "Enter Email Address !";
        } else if (password === "") {
            containerRef.current.style.border = "1px solid red";
            passwordRef.current.style.border = "1px solid red";
            errRef.current.style.display = "block";
            errRef.current.style.border = "1px solid red";
            errRef.current.textContent = "Please Enter Password !";
        } else if (password.length < 6) {
            containerRef.current.style.border = "1px solid red";
            passwordRef.current.style.border = "1px solid red";
            errRef.current.style.display = "block";
            errRef.current.style.border = "1px solid red";
            errRef.current.textContent = "Password Must Be At 6 Character !";
        } else if (!email.includes("@") || !email.includes(".com")) {
            containerRef.current.style.border = "1px solid red";
            emailRef.current.style.border = "1px solid red";
            errRef.current.style.display = "block";
            errRef.current.style.border = "1px solid red";
            error.textContent = "Invalid Email Address !";
        } else {
            setIsValid(true);
            btnRef.current.style.width = "150px";
            loadingRef.current.style.display = "block";
            setTimeout(() => {
                btnRef.current.style.width = "110px";
                loadingRef.current.style.display = "none";
                btnRef.current.textContent = "Login Now";
                let loginData = {
                   user_name : name,
                    user_email: email,
                    user_password: password
                };
                api.postData("/signup/", loginData, res => {
                    setResponse(res);
                    if (res.status === "success") {
                        containerRef.current.style.border = "1px solid #00bb1f";
                        passwordRef.current.style.border = "1px solid #00bb1f";
                        emailRef.current.style.border = "1px solid #00bb1f";
                        errRef.current.style.display = "block";
                        errRef.current.style.color = "#00b627";
                        errRef.current.style.borderColor = "#00b627";
                        errRef.current.textContent = res.message;
                        api.setCookie("login", res.token);
                        navigate("/");
                    } else {
                        containerRef.current.style.border = "1px solid red";
                        passwordRef.current.style.border = "1px solid red";
                        emailRef.current.style.border = "1px solid red";
                        errRef.current.style.display = "block";
                        errRef.current.style.color = "red";
                        errRef.current.style.borderColor = "red";
                        errRef.current.textContent = res.message;
                    }
                });
            }, 3000);
        }
        setTimeout(() => {
            containerRef.current.style.border = "";
            passwordRef.current.style.border = "";
            emailRef.current.style.border = "";
            nameRef.current.style.border = "";
            errRef.current.style.display = "none";
        }, 2000);
    };

    console.log(response);

    return (
        <>
            <div className="login-container">
                <div ref={containerRef} className="container">
                    <h2>Create An Account</h2>
                    <form id="login">
                        <span
                            ref={errRef}
                            style={{ display: "none" }}
                            id="error"
                        >
                            Invalid Email Address!
                        </span>
                        <input
                            ref={nameRef}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Enter Full Name"
                        />
                        <input
                            ref={emailRef}
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                        <input
                            ref={passwordRef}
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <button
                            ref={btnRef}
                            onClick={SubmitRegistration}
                            id="login_btn"
                        >
                            <div
                                ref={loadingRef}
                                style={{ display: "none" }}
                                className="loading"
                            ></div>
                            {isValid ? "Processing..." : "Login Now"}
                        </button>
                        <strong>
                            Dont have an account? <Link to="/login">Signup</Link>
                        </strong>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Signup;
