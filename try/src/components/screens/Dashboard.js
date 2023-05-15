import React,{useState} from 'react'
import '../styles/dashboard.css'
import Dashboard_tab from '../called_components/screen_called/tabs/dashboard_tab'
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';

const Dashboard = () => {
  const [show , setShow] = useState(false)
  return (
    <div className='cont'>
      <Dashboard_tab/>
      <div className='dashboardbox'>
        <text className='dashboardtxt'>
          Dashboard
        </text>
      
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

export default Dashboard