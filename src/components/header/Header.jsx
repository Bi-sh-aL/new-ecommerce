import React,{useState,useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import {AiOutlineSearch,AiOutlineHeart} from "react-icons/ai"
import {GoPerson} from "react-icons/go"
import {MdOutlineShoppingBag} from "react-icons/md"
import Home from "../../pages/Home";
import './header.scss'
import Contact from "../../pages/contact/Contact";


function Header() {
  const [sticky, setSticky] = useState(false);


  useEffect(()=>{ 
      const handleScroll = () => {
           setSticky(window.scrollY > 150)
      }
           window.addEventListener('scroll', handleScroll)
           return ()=> window.removeEventListener('scroll',handleScroll)
      
  })
  return (
    <>
    <header className="">
      <nav className={`pb-3 navbar navbar-expand-lg  align-items-center bg-body-tertiary ${sticky ? 'sticky' : ''}`}>
        <div className="container d-flex">
          <a className="navbar-brand fs-3 fw-bold m-0" href="#">
            <img src="https://wp.alithemes.com/html/guza/demos/assets/imgs/template/logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarNav">
            <ul className="navbar-nav ms-3 my-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="icons ms-auto d-flex">
              <div  className="icon me-2">
              <AiOutlineSearch size={23}/>
              </div>
              <div className="icon me-2">
              <GoPerson size={23}/>
              </div>
              <div className="heart icon position-relative">
              <AiOutlineHeart size={23}/>
              </div>
              <div className="icon bag position-relative">
              <MdOutlineShoppingBag size={23}/>
              </div>
            </div>
          </div>
        </div>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </header>
     
    </>
  );
}

export default Header;
