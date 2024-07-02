import React from "react";
import "./../../styles/Course.css";
import NavbarUniversity from "../../component/NavbarUniversity/NavbarUniversity";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "react-bootstrap";
import img1 from "./../../img/healthcare-course.6ba6fb60b789218ab030.jpg";
import img2 from "./../../img/music-course.9da9e0d94468384a342e.jpg";
import img3 from "./../../img/art-course.d167903288709e7b706a.jpg";
import img4 from "./../../img/law-course.dad53451325d3f3cf46e.jpg";
import Frq from "../../component/Frq/Frq";
import Footer from "../../component/Footer/Footer";

const Courses = [
  {
    id: 1,
    title: "Healthcare Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img1,
  },
  {
    id: 2,
    title: "Education Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img4,
  },
  {
    id: 3,
    title: "Sport Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img2,
  },
  {
    id: 4,
    title: "Music Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img3,
  },
  {
    id: 5,
    title: "Computer Science Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img1,
  },
  {
    id: 6,
    title: "Law Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img2,
  },
  {
    id: 7,
    title: "Business Course ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img4,
  },
  {
    id: 8,
    title: "Healthcare Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
    img: img2,
  },
];

function Course() {
  return (
    <div className="course">
      <header className="header-course h-100">
        <NavbarUniversity />
        <div className="hero-text container d-flex align-items-center text-light flex-column justify-content-center h-100">
          <h1 className="fw-semibold">Our Courses</h1>
          <p className="w-75 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
            eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime
            cupiditate culpa minus animi repellat autem!
          </p>
        </div>
      </header>

      {/* end header */}
      <div className="courses py-5">
        <div className="container">
          <div className="row">
            {Courses.map((course) => (
              <div className="col-lg-6 mb-4" key={course.id}>
                <Card className="text-white shadow mb-4">
                  <CardImg src={course.img} alt={course.title} />
                  <CardImgOverlay className="d-flex justify-content-center align-items-center flex-column p-md-5">
                    <CardTitle className="text-danger fs-1">
                      {course.title}
                    </CardTitle>
                    <CardText className="text-center">
                      {course.description}
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end courses */}
      <div className="frq-course text-light text-bg-dark">
        <div className="container">
          <Frq />
        </div>
      </div>
      {/* end frq */}
      <Footer/>
    </div>
  );
}

export default Course;
