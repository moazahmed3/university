import React from "react";
import "./ChoaseUniversity.css";
import { FaTrophy } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ChoaseUniversity() {
  return (
    <div className="choaseUniversity text-center container py-5">
      <h2>Why choose React University ?</h2>
      <div className="row pt-5 ">
       <div className="col-lg-4 col-md-6 text-center mb-4">
          <div className="box rounded p-3">
            <FaTrophy fill="#dc3545" fontSize={50} />
            <h5 className="my-3">2 Trophies Received</h5>
            <p className=" text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laborum qui facilis perspiciatis, ab pariatur! Eaque maxime
              ratione illum distinctio?
            </p>
          </div>
        </div>
       <div className="col-lg-4 col-md-6 text-center mb-4">
          <div className="box rounded p-3">
            <FaLocationDot fill="#dc3545" fontSize={50} />
            <h5 className="my-3">2 Trophies Received</h5>
            <p className=" text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laborum qui facilis perspiciatis, ab pariatur! Eaque maxime
              ratione illum distinctio?
            </p>
          </div>
        </div>
       <div className="col-lg-4 col-md-6 text-center mb-4">
          <div className="box rounded p-3">
            <MdEmojiEmotions fill="#dc3545" fontSize={50}/>

            <h5 className="my-3">2 Trophies Received</h5>
            <p className=" text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laborum qui facilis perspiciatis, ab pariatur! Eaque maxime
              ratione illum distinctio?
            </p>
          </div>
        </div>
      
     
         
      </div>
    </div>
  );
}

export default ChoaseUniversity;
