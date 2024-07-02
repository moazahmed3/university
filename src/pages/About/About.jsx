import React from "react";
import "./../../styles/About.css";
import NavbarUniversity from "../../component/NavbarUniversity/NavbarUniversity";
import img1 from "./../../img/person3.de7902c744dd67eccc87.jpg";
import { Link } from "react-router-dom";
import ChoaseUniversity from "../../component/ChoaseUniversity/ChoaseUniversity";
import Footer from "../../component/Footer/Footer";
const images = Array(9).fill(img1);
function About() {
  return (
    <div className="about">
      <header className="about-course h-100">
        <NavbarUniversity />
        <div className="hero-text container d-flex align-items-center text-light flex-column justify-content-center h-100">
          <h1 className="fw-semibold">About Us </h1>
          <p className="w-75 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
            eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime
            cupiditate culpa minus animi repellat autem!
          </p>
        </div>
      </header>
      {/* end header */}
      <div className="sec-about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 mb-5">
              <h2>Study with us</h2>
              <p className="text-black-50 py-4 w-75 fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, sunt saepe fugit dolores error mollitia doloribus
                optio, recusandae aperiam, nihil eius rem eum eaque sequi. Earum
                perspiciatis laudantium at quo sapiente perferendis distinctio,
                voluptatum obcaecati ipsa, eos nesciunt saepe adipisci placeat
                ducimus! Dignissimos quaerat fugiat consequuntur tempora fuga
                eveniet nobis!
              </p>
              <p className="text-black-50 py-4 w-75 fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, sunt saepe fugit dolores error mollitia doloribus
                optio, recusandae aperiam, nihil eius rem eum eaque sequi. Earum
                perspiciatis laudantium at quo sapiente perferendis distinctio,
                voluptatum obcaecati ipsa, eos nesciunt saepe adipisci placeat
                ducimus! Dignissimos quaerat fugiat consequuntur tempora fuga
                eveniet nobis!
              </p>
              <Link to="/contact" className="btn main-btn fs-4">
                Contact us
              </Link>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <img src={img1} alt="" className=" img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
      {/* end sec about */}
      <div className="about-choose bg-dark text-light">
        <ChoaseUniversity />
      </div>
      {/* end choose */}
      <div className="gallery pt-5 bg-body-tertiary">
      <div className="container text-center">
        <h3 className="fs-2">Our Winners</h3>
        <div className="row mt-5">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-5">
              <img src={image} alt="" className="rounded img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* end gallery */}
    <Footer/>
    </div>
  );
}

export default About;
