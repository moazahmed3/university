import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer pt-5">
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6 col-lg-5 mb-5 pe-5">
          <div className="btn-footer">
            <Link className="main-btn btn text-capitalize px-3 fs-4 ">
              get in touch
            </Link>
            <div className="social-media d-flex justify-content-between mt-5 pe-5">
              <FaFacebook fill="#dc3545" />
              <FaInstagram fill="#dc3545" />
              <FaYoutube fill="#dc3545" />
              <FaTiktok fill="#dc3545" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-5">
          <ul className="links-footer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/university">our courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/contact">get in touch</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <p className=' text-secondary'>Main Address - 47 Street Name, London UK</p>
          <p className=' text-secondary'>Phone Number - 0900800700</p>
          <p className=' text-secondary'>Email - react@university.co.uk</p>
        </div>
      </div>
    </div>
    <div className="developer bg-body-tertiary py-3 text-center ">
        <p>copyright @ made by <span className="main-color fw-bolder">Moaz El Sabagh</span></p>
    </div>
  </div>
  )
}

export default Footer