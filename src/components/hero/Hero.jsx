import React from 'react'
import './hero.scss'

function Hero() {
  return (
    <div className=' bg-body-tertiary hero'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 my-auto col-sm-12 ps-5 py-5">
                    <h1>Rent it.</h1>
                    <h1>Wear it.</h1>
                    <h1>Love it.</h1>
                    <p className='pb-4 pt-2'>Use code HOLIDAY at checktout.</p>
                    <a href="" className='btn btn-dark px-3'>Shop Now</a>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 image">
                    <img src="https://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage2/banner.png" className='w-100' alt="" loading='lazy'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero