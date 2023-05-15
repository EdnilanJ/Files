import React,{useState} from 'react'
import Inventory_Tab from '../called_components/screen_called/tabs/inventory_tab'
import viewprod from '../pics/viewp.png'
import addprod from '../pics/addp.png'
import '../styles/inventory.css'
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';
import { useNavigate } from 'react-router-dom'

const Inventory = () => {
  const navigate = useNavigate()
  const [show , setShow] = useState(false)
  return (
    <div className='cont'>
      <Inventory_Tab/>
      <div className='inventorybox'>
        <text className='inventorytxt'>Inventory</text>
        <button className='viewbtn' onClick={() => navigate('/inventory/view_products')}>
          <img src={viewprod} className='imgview'/>
        </button>
        <text className='viewtxt'>View Products</text>

        <button className='addbtn' onClick={() => navigate('/inventory/add_products')}>
          <img src={addprod} className='imageadd'/>
        </button>
        <text className='addtxt'>Add Products</text>
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

export default Inventory