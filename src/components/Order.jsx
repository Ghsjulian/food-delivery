import React, { useState, useRef, useEffect } from "react";
import api from "../__API__.js";
import { useNavigate } from "react-router-dom";
const Order = () => {
  document.title="Fill out this form to confirm your order"
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    
    /*
    const navigate = useNavigate();
    const errRef = useRef(null);
    const containerRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const btnRef = useRef(null);
    */
    return (
      <>
                {  /*<!-- Create Section -->*/}
            <section id="cartPage" className="main-section">
                <h2>
                    Fill Out This <i className="bi bi-arrow-right"></i>
                    <span>Form</span>
                </h2>
                <div className="order-form">
                    <input type="text" placeholder="Enter Full Name" />

                    <input type="number" placeholder="Contact/Phone Number" />
                    <input type="text" placeholder="Street/Road Name" />
                    <select>
                        <option value="Sylhet">Select Your Location</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>

                    <button id="order-btn">Order Now</button>
                </div>
            </section>
            {/*<!-- End Section -->*/}
      </>
      )
}

export default Order