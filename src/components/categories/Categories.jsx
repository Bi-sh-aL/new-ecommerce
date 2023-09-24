import React from 'react'
import CategoryData from './CategoryData'
import './category.scss'

function Categories() {
  return (
    <div>
        <div className="container py-5">
            <div className='d-flex justify-content-between align-items-center'>
            <h2>Featured Categories</h2>
            <a className='fs-6 fw-normal text-decoration-underline' href='#'>See All Categories</a>
            </div>
            <div className="row">
                {CategoryData.map((a)=>(
                  <div key={a.id} className="col-lg-4 gy-4 cat">
                  <div className='d-flex g-5 justify-content-around bg-body-tertiary'>
                  <div className='mt-4'>
                      <h4>{a.name}</h4>
                      <p className='fs-6 fw-normal'>{a.items}</p>
                  </div>
                  <img src={a.image} alt="" className='' height={250}/>
                  </div>
              </div>  
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Categories