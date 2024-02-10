import React from "react"

const Hero = ()=>{
  return (
    <>
    {/*
     <section className="hero">
                <h2 id="hero-text">Food Community Center</h2>
                <p id="description">
                    Welcome to our food recipes community. If you want to buy
                    something please visit our timeline and order your favorite
                    food
                </p>
                <a href="#food-area"><i className="bi bi-arrow-down"></i></a>
            </section>
            */}
     <section className="hero-section">
                <div className="hero-img">
                    <img src="images/hero.jpg" />
                </div>
                <div className="hero-content">
                    <h2 id="hero-text">
                        Food Delivery Community,<span>Our Best Plan</span>
                    </h2>
                    <p id="description">
                        Welcome to our food recipes community. If you want to
                        buy something please visit our timeline and order your
                        favorite food
                    </p>
                    <a href="#food-area"><i className="bi bi-arrow-down"></i></a>
                </div>
            </section>
    </>
    )
}
export default Hero;