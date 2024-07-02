import React from "react";
import NavbarUniversity from "./../../component/NavbarUniversity/NavbarUniversity";
import ChoaseUniversity from "./../../component/ChoaseUniversity/ChoaseUniversity";
import "./../../styles/home.css";
import { Link } from "react-router-dom";
import img1 from "./../../img/start-courses-img.a78cf1f58e88a06655aa.jpg";
import Frq from "../../component/Frq/Frq";
import Card from "react-bootstrap/Card";
import Blogimg1 from "./../../img/blog1-img.jpg";
import Blogimg2 from "./../../img/blog2-img.jpg";
import BLogimg3 from "./../../img/blog3-img.jpg";
import CardBLog from "../../component/CardBLog/CardBLog";

import Footer from "../../component/Footer/Footer";

const Blogs = [
  {
    id: 1,
    title: "Blog1",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: Blogimg1,
  },
  {
    id: 2,
    title: "Blog2",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: Blogimg2,
  },
  {
    id: 3,
    title: "Blog3",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: BLogimg3,
  },
];

function Home() {
  return (
    <div className="home">
      <header>
        <NavbarUniversity />
        <section className="home-sec h-100 min-vh-100 text-center container align-items-center align-content-center">
          <h3>Welcome To</h3>
          <h1>React University London</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi
            debitis, et quas voluptatibus nam ex. Necessitatibus eligendi
            ratione expedita! Porro, ut.
          </p>

          <div className="btns pt-3">
            <Link to="/university">
              <button className="btn rounded p-2 fs-5 main-btn m-2">
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn rounded p-2 fs-5 sec-btn m-2">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </header>

      {/* Choose course */}
      <ChoaseUniversity />

      {/* Course home */}
      <div className="course-home py-5 bg-body-tertiary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 mb-5">
              <div className="text-course-home">
                <h2>2024 Start Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, placeat.
                </p>
                <Link to="/university">
                  <button className="btn rounded p-2 fs-5 main-btn m-2">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-5">
              <div>
                <img
                  src={img1}
                  alt="Start Courses"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Frq />

      {/* Blog Section */}
      <div className="sec-blog  py-5">
        <h3 className="py-4 mb-3 text-light text-center">Latest On The Blog</h3>
        <div className="container">
          <div className="row">
            {Blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
                <Link to="/blog" className="text-decoration-none">
                  <CardBLog data={blog} />
                </Link>
              </div>
            ))}
          </div>
          <div className="btn-blog text-center mt-4">
            <Link to="/blog" className="btn main-btn text-capitalize px-3 fs-4">
              Read more Blogs
            </Link>
          </div>
        </div>
      </div>

      {/* footer  */}
            <Footer/>
    </div>
  );
}

export default Home;
