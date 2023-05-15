import React, { useState, useEffect } from 'react'
import ViewProd_Tab from '../called_components/screen_called/tabs/viewprod_tab'
import '../styles/viewprod.css'
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';

const ViewProd = () => {
  const [show , setShow] = useState(false)

  return (
    <div className='cont'>
      <ViewProd_Tab/>
      <div className='viewproductbox'>
        <text className='viewproducttxt'>View Products</text>
      </div>
      <button className='btnd' onClick={() => setShow(true)}>
                    <img src = {out} className = 'siout'/>
                    <text>Sign Out</text>
                </button>
            
                {show && <Signout_dialog/>}
                {show && 
                <button className='nodialog' onClick={() => setShow(false)}>
                    <text>no</text>
                    </button>}
  </div>
  )
}

export default ViewProd