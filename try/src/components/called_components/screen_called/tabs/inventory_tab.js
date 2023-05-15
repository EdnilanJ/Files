import React from 'react'
import '../../style_called/inventory_tab.css'
import home from '../../../pics/home.png'
import inv from '../../../pics/inventory.png'
import inventorylogs from '../../../pics/inventory_logs.png'
import search from '../../../pics/search.png'
import logooo from '../../../pics/logoo.png';
import out from '../../../pics/sign_out.png';

import { useNavigate } from 'react-router-dom';


const Inventory_Tab = () => {
    const navigate = useNavigate();
  return (
    <div className='con'>
    <div>
        <img src = {logooo} className = 'logos' />   
            <button className={'tabhead ho2'} onClick={()=> navigate('/dashboard')}>
                <img src={home} className='pich'/>
            </button>

            <button className={'tabhead in2'} onClick={()=> navigate('/inventory')}>
                <img src={inv} className='pici'/>
            </button>

            <button className={'tabhead inl2'} onClick={()=> navigate('/inventory_logs')}>
                <img src={inventorylogs} className='picil'/>
            </button>

            <button className={'tabhead se2'} onClick={()=> navigate('/search')}>
                <img src={search} className='picss'/>
            </button>

        <button className='btnd' /*onClick={() => setShow(true)}*/>
            <img src = {out} className = 'siout'/>
            <text>Sign Out</text>
        </button>
    </div>
</div>
  )
}

export default Inventory_Tab