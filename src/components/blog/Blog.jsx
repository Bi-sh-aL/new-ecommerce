import React from 'react'
import BlogData from './BlogData'
import './blog.scss'

function Blog() {
  return (
    <>
    <div className="container py-4 blog">
        <h2 className='text-center pb-3 '>From the Blog</h2>
        <div className="row">
          {BlogData.map((a)=>(
           <div key={a.id} className="col-lg-4">
            <div className='overflow-hidden preview mt-4'>
              <img src={a.img} alt="" className='w-100' height={250} loading='lazy'/>
            </div>
            <div className='d-flex align-items-center gap-3  pt-4 cat-text'>
              <p><a href="#">{a.cat}</a></p>
              <p>{a.date}</p>
            </div>
            <h4 className='py-2'><a href="#">{a.title}</a></h4>
            <p className='descript pb-3'>{a.desc}</p>
            <a href="" className='read'>{a.btn}</a>
           </div>
          ))}
          
        </div>
    </div>
    </>
  )
}

export default Blog