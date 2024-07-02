import React from 'react'
import './../../styles/Blog.css'
import NavbarUniversity from '../../component/NavbarUniversity/NavbarUniversity'
import img1 from "./../../img/blog1-img.jpg"
import img2 from "./../../img/blog2-img.jpg"
import img3 from "./../../img/blog3-img.jpg"
import img4 from "./../../img/blog8-img.jpg"
import img5 from "./../../img/blog9-img.jpg"
import CardBLog from '../../component/CardBLog/CardBLog'
import Footer from '../../component/Footer/Footer'
const Blogs = [
  {
    id: 1,
    title: "Blog 1",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img1,
  },
  {
    id: 2,
    title: "Blog 2",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img2,
  },
  {
    id: 3,
    title: "Blog 3",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img3,
  },
  {
    id: 3,
    title: "Blog 4",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img4,
  },
  {
    id: 3,
    title: "Blog 5",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img5,
  },
  {
    id: 3,
    title: "Blog 6",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img3,
  },
  {
    id: 3,
    title: "Blog 7",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img4,
  },
  {
    id: 3,
    title: "Blog 8",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img1,
  },
  {
    id: 9,
    title: "Blog 9",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisidebitis, et quas voluptatibus nam ex. Necessitatibus eligendiratione expedita! Porro, ut. ",
    img: img5,
  },
];

function Blog() {
  return (
    <div className='blog'>
       <header className="blog-course h-100 ">
        <NavbarUniversity/>
        <div className="hero-text container d-flex align-items-center text-light flex-column justify-content-center h-100">
          <h1 className="fw-semibold">Blog</h1>
          <p className="w-75 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
            eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime
            cupiditate culpa minus animi repellat autem!
          </p>
        </div>
      </header>
      {/* end header-blog */}
      <div className="container cards-blog py-5">
        <div className="row">
          {
            Blogs.map((blog =>(
              <div className="col-lg-4 col-md-6 mb-5" key={blog.id}>
            <CardBLog data={blog}/>
          </div>
            )))
          }
        </div>
      </div>
          {/* end cards blog */}
          <Footer/>
    </div>
  )
}

export default Blog
