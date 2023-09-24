import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import Data from './Data'
import './insta.scss'

function Instagram() {
  return (
    <div className='container-fluid insta'>
        <p className=' d-flex align-items-center gap-2 justify-content-center'><AiOutlineInstagram size={22}/> Instagram with #July</p>
        <div className="row pt-3 gx-1 gy-1">
            {Data.map((a)=>(
               <div key={a.id} className="col-lg-2 col-md-4  overflow-hidden">
                 <img src={a.image} alt="" className='w-100 h-100' loading='lazy'/>
               </div>
            ))}
            
        </div>
    </div>
  )
}

export default Instagram