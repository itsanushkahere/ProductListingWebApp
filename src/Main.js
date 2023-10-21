import React from "react";
import videoImage from "./video-placeholder.png";
import appStoreImage from "./icn-app-store.png";
import phoneImage from "./sample-image.png";
import facebook from "./social-facebook.png";
import twitter from "./social-twitter.png";
import stumbleupon from "./social-stumbleupon.png";
import google from "./social-google.png";
import instagram from "./social-instagram.png";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="headerMain">
        <div className="CompanyName">
          <h1>Company Name</h1>
        </div>
        <div className="LoginMain">
          <a href="/login" className="LoginText">
            Login
          </a>
        </div>
      </div>
      <div className="body1">
        <div className="ProductName">
          <div className="ProductTitle">Product Name</div>
          <div className="ProductDescription">
            Breif description of what your app/product does.
          </div>

          <div className="AppStore">
            <div>
              <img src={appStoreImage} alt="app-download" />
            </div>
            <div className="ProductAlignment">
              <span className="ProductText1">Download on the</span>
              <span className="ProductText2">App Store</span>
            </div>
          </div>
        </div>
        <div className="videoimg">
          <img
            src={videoImage}
            alt="video-placeholder"
            className="videoDetails"
          />
        </div>
      </div>
      <div className="body2">
        <div className="Section1Main">
          <div className="SecHeading">Section 1 Heading</div>
          <div className="lorempara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            fringilla quam. Duis faucibus, velit eu tincidunt convallis, felis
            tortor rhoncus velit, vel suscipit dolor turpis ut ligula.
            Suspendisse potenti. Nullam ac ante eu nulla tristique ultrices.
            Donec auctor vel justo nec eleifend. Cras dictum libero at magna
            sollicitudin, in eleifend ex volutpat. Sed vulputate vitae justo vel
            pulvinar. Vestibulum id justo risus. Vivamus nec diam nec justo
            ullamcorper malesuada. Suspendisse potenti.{" "}
          </div>
        </div>
        <div className="phoneimage1">
          <img src={phoneImage} alt="phoneImage1" className="phoneImage" />
        </div>
      </div>
      <div className="body3">
        <div className="phoneimage2">
          <img src={phoneImage} alt="phoneImage2" className="phoneImage" />
        </div>
        <div className="Section2Main">
          <div className="SecHeading">Section 2 Heading</div>
          <div className="lorempara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            fringilla quam. Duis faucibus, velit eu tincidunt convallis, felis
            tortor rhoncus velit, vel suscipit dolor turpis ut ligula.
            Suspendisse potenti. Nullam ac ante eu nulla tristique ultrices.
            Donec auctor vel justo nec eleifend. Cras dictum libero at magna
            sollicitudin, in eleifend ex volutpat. Sed vulputate vitae justo vel
            pulvinar. Vestibulum id justo risus. Vivamus nec diam nec justo
            ullamcorper malesuada. Suspendisse potenti.
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="footer1Info">
          Download it now and see what all the buzz is about!
        </div>
      </div>
      <div className="SocialFooter">
        <div className="SocialIcons">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={stumbleupon} alt="STumble" />
          <img src={google} alt="google" />
          <img src={instagram} alt="Instagram" />
        </div>
        <div className="CopyrightText">
          <div>Copyright 2023 companyname</div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
