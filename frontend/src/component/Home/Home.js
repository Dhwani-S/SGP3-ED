import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";


const Home = () => {
  
  return (
    
    <Fragment>
   <MetaData title="ECOMMERCE & Dashboard" />
   Home {/* ------------------ Banner ---------------------- */}
            <div class="banner">

              <div class="container">

                <div class="slider-container has-scrollbar">

                  <div class="slider-item">

                    <img src="../../../images/banner1.png" alt="women's latest fashion sale" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">New Products Every Week!</p>

                      <h2 class="banner-title">Women's latest fashion</h2>

                      <p class="banner-text">
                        at the best price
                      </p>

                      <a href="/products" class="banner-btn">Shop now</a>

                    </div>

                  </div>

                  <div class="slider-item">

                    <img src="../../../images/banner2.png" alt="modern sunglasses" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">Trending accessories</p>

                      <h2 class="banner-title">Vast Collection</h2>

                      <p class="banner-text">
                        starting at just <b>30</b>/-
                      </p>

                      <a href="/products" class="banner-btn">Shop now</a>

                    </div>

                  </div>

                  <div class="slider-item">

                    <img src="../../../images/banner3.png" alt="new fashion summer sale" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">Happy Customers</p>

                      <h2 class="banner-title">Read what people have to say about us!</h2>

                      <p class="banner-text">
                        Read here
                      </p>

                      <a href="/about" class="banner-btn">Testimoties</a>

                    </div>

                  </div>

                </div>

              </div>

            </div>
    </Fragment >
  );
};

export default Home;
