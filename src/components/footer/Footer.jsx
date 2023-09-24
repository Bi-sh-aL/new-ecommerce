import React from 'react'
import './footer.scss'
import {FaCcVisa,FaCcMastercard,FaCcStripe,FaCcPaypal} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
       <div className="container py-5 footer-1">
        <div className="row">
            <div className="col-lg-4">
                <h6>About Shop</h6>
                <p className="pb-4 me-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Read more</p>
                <p className='pb-1'>E. hello@uxper.co</p>
                <p className='pb-4'>T. (00) 342 489 33</p>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-3">
                        <h6>Company</h6>
                        <ul>
                            <li>
                                <a href=""> About us</a>
                            </li>
                            <li>
                                <a href=""> Careers</a>
                            </li>
                            <li>
                                <a href=""> Store Locator</a>
                            </li>
                            <li>
                                <a href=""> Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h6>Cutomer Care</h6>
                        <ul>
                            <li>
                                <a href=""> Size Guide</a>
                            </li>
                            <li>
                                <a href=""> Help & FAQS</a>
                            </li>
                            <li>
                                <a href=""> Return My Order</a>
                            </li>
                            <li>
                                <a href=""> Refer a Friend</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h6>Terms & Policies</h6>
                        <ul>
                            <li>
                                <a href=""> Duties & Taxes</a>
                            </li>
                            <li>
                                <a href=""> Shipping Info</a>
                            </li>
                            <li>
                                <a href=""> Privacy Policy</a>
                            </li>
                            <li>
                                <a href=""> Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h6>Follow Us</h6>
                        <ul>
                            <li>
                                <a href=""> Instagram</a>
                            </li>
                            <li>
                                <a href=""> Facebook</a>
                            </li>
                            <li>
                                <a href=""> Pinterest</a>
                            </li>
                            <li>
                                <a href="">Tiktok</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <hr />
       <div className="footer-2 py-4">
        <div className="container d-flex justify-content-between">
            <div className="div">
            © 2023 Guza.Co. All rights reserved
            </div>
            <div className='gap-2 d-flex '>
              <FaCcVisa size={30}/>  
              <FaCcMastercard size={30}/>
              <FaCcStripe size={30}/>
              <FaCcPaypal size={30}/>
              <form action="" className='d-flex gap-2 '>
                <select name="" id="">
                    <option value="eng">EN</option>
                    <option value="jp">JP</option>
                    <option value="kr">KR</option>
                </select>
                <select name="" id="">
                    <option value="usd">USD</option>
                    <option value="euro">EURO</option>
                    <option value="aud">AUD</option>
                </select>
              </form>
            </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer
