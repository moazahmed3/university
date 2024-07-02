import React from "react";
import "./Frq.css"; // Ensure this file exists and is correctly imported
import Accordion from "react-bootstrap/Accordion"; // Ensure react-bootstrap is installed

function Frq() {
  return (
    <div className="Frq py-5">
      <div className="container w-75">
        <h2 className="py-3 text-capitalize text-center">
          Frequently Asked Questions
        </h2>
        <p className="py-3 lh-base text-black-50 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          numquam rem expedita similique necessitatibus dolore magnam natus sit
          ipsa, quae neque accusantium placeat laudantium mollitia,
          reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis
          repudiandae eos! Quasi unde veritatis labore quibusdam.
        </p>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Frq;
