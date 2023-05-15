import React,{useState} from 'react'
import '../../style_called/dashboard_tab.css'
import home from '../../../pics/home.png'
import inv from '../../../pics/inventory.png'
import inventorylogs from '../../../pics/inventory_logs.png'
import search from '../../../pics/search.png'
import logooo from '../../../pics/logoo.png'


import { useNavigate } from 'react-router-dom';


const Dashboard_tab = () => {
    const navigate = useNavigate();

  return (
    <div className='con'>
        <div>
            <img src = {logooo} className = 'logos'/>   
                <button className={'tabhead ho1'} onClick={()=> navigate('/dashboard')}>
                    <img src={home} className='pich'/>
                </button>

                <button className={'tabhead in1'} onClick={()=> navigate('/inventory')}>
                    <img src={inv} className='pici'/>
                </button>

                <button className={'tabhead inl1'} onClick={()=> navigate('/inventory_logs')}>
                    <img src={inventorylogs} className='picil'/>
                </button>

                <button className={'tabhead se1'} onClick={()=> navigate('/search')}>
                    <img src={search} className='picss'/>
                </button>
        </div>
        
    </div>
  )
}

export default Dashboard_tab