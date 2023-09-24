import React, { useState } from "react";
import ProductData from "./ProductData";
import {AiOutlineSearch,AiOutlineHeart} from "react-icons/ai"
import {GoArrowSwitch} from "react-icons/go"
import './product.scss'

function Product() {
  return (
    <>
      <div className='container py-3'>
        <h2>Our Products</h2>
        <div className="row" ref={parent}>
            {ProductData.map((a)=>(
                <div key={a.id} className="col-lg-3 col-md-6 gy-4 pro">
                    <div className="overflow-hidden product position-relative">
                     <img src={a.img} alt="" className='w-100 bg-body-tertiary p-4' height={400}/>
                     <div className="text-center bg-dark text-light option">
                        <p className="py-2">Select opions</p>
                     </div>
                     <div className="position-absolute d-flex flex-column quick-button gap-2">
                        <div className="bg-light rounded-circle p-2 icn">
                     <AiOutlineSearch size={20}/>
                     </div>
                     <div className="bg-light rounded-circle p-2 icn">
                     <GoArrowSwitch size={20}/>
                     </div>
                     <div className="bg-light rounded-circle p-2 icn">
                     <AiOutlineHeart size={20}/>
                     </div>
                    
                     </div>
                     </div>
                     <h4 className="pt-3">{a.title}</h4>
                     <p className="prc">{a.price}$</p>
                </div>
            ))}
        </div>
    </div>
     
    </>
  );
}

export default Product;
