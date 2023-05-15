import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style_called/confirmdialogstyle.css'

function Signout_dialog() {
  const signout = useNavigate();

  return (
    <div className='divback'>
      <div className='dialogback'>
        <div className='dialogform'>
          <text className='txtdialog'>
            Are you sure you want to Sign out??
          </text>
          
          <button className='yesdialog' onClick={() => signout('/')}>
            <text>yes</text>
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Signout_dialog