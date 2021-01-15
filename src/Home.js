import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim Card 5MP Camera, WiFi, Bluetooth, GPS, Quad Core, HD Touchscreen, Support 3G Phone Call (Black)"
            price={108.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61NfcHUmxBL._AC_SL1000_.jpg"
          />
          <Product
            id="49538094"
            title="Selfie Ring Light with Tripod Stand & Cell Phone Holder for Live Stream/Makeup, UBeesize Mini Led Camera Ringlight for YouTube Video/Photography"
            price={40.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61dR6Py28XL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SINGER 4423 Sewing Machine, grey"
            price={321.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51JFZ7U25-L._AC_SL1100_.jpg"
          />
          <Product
            id="23445930"
            title="Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic Black (US Version)"
            price={126.74}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71LcAql4%2BaL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Cricut EasyPress 2 - Heat Press Machine For T Shirts and HTV Vinyl Projects, Mint "
            price={142.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/615v7zgMQ1L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
            price={164.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
