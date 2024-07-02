import React from "react";
import "./../../styles/Contact.css";
import NavbarUniversity from "../../component/NavbarUniversity/NavbarUniversity";
import img1 from "./../../img/Liverpool-location.jpg";
import img2 from "./../../img/London-location.jpg";
import img3 from "./../../img/Manchester-location.jpg";
import Footer from "../../component/Footer/Footer";
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  Row,
} from "react-bootstrap";
function Contact() {
  return (
    <div className="contact">
      <header className="contact-hero h-100 ">
        <NavbarUniversity />
        <div className="hero-text container d-flex align-items-center text-light flex-column justify-content-center h-100">
          <h1 className="fw-semibold">Get In Touch</h1>
          <p className="w-75 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
            eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime
            cupiditate culpa minus animi repellat autem!
          </p>
        </div>
      </header>
      {/* end header-blog */}
      <div className="form py-5">
        <div className="container w-50">
          <Form>
            <Row className="mb-4">
              <Col sm={12} md={6}>
                <FormLabel>First Name</FormLabel>
                <FormControl placeholder="First Name" />
              </Col>
              <Col sm={12} md={6}>
                <FormLabel>Last Name</FormLabel>
                <FormControl placeholder="Last Name" />
              </Col>
            </Row>
            <FormGroup className="mb-4">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" placeholder="Enter your email" />
              <FormText>
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup className="mb-4">
              <FormLabel>Address</FormLabel>
              <FormControl type="email" placeholder="Enter your Address" />
            </FormGroup>
            <Row className="mb-3">
              <Col sm={12} md={6}>
                <FormLabel>Location</FormLabel>
                <FormSelect defaultValue={"London"}>
                  <option>London</option>
                  <option>Liverpool</option>
                  <option>Manchester</option>
                </FormSelect>
              </Col>
              <Col sm={12} md={6}>
                <FormLabel>Postcode</FormLabel>
                <FormControl type="text" placeholder="Postcode" />
              </Col>
            </Row>
            <FormGroup className="mb-4"> 
              <FormLabel>Your Message</FormLabel>
              <FormControl type="textarea" style={{ height: '100px' }}/>
            </FormGroup>
            <button className="btn main-btn text-capitalize mt-4" type="submit">submit</button>
          </Form>
        </div>
      </div>
      <div className="cites bg-dark py-5">
        <div className="container">
          <h2 className=" text-light text-center">Our Locations</h2>
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 mb-5 text-center">
              <div className="img">
                <img src={img1} alt="" className=" img-fluid rounded" />
                <h3 className=" text-light mt-3">Liverpool</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 text-center">
              <div className="img">
                <img src={img2} alt="" className=" img-fluid rounded" />
                <h3 className=" text-light mt-3">London</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 text-center">
              <div className="img">
                <img src={img3} alt="" className=" img-fluid rounded" />
                <h3 className=" text-light mt-3">Manchester</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cites */}
      <Footer />
    </div>
  );
}

export default Contact;
