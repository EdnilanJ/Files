import React, {useState} from 'react'
import logoo from '../pics/logoo.png'
import '../styles/signInStyle.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()

  const [sign, setSign] = useState({
   email: "",
   password:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSign((prevState) => ({ ...prevState, [name]: value }));
  };


  const signin = () => {
    if (sign.email === "" && sign.password === ""){
        alert('wla kay ge butang')
    }else{
      if (sign.email === "" || sign.password === ""){
        alert('wla nimo ge human')
      }else{
        navigate('/dashboard')
      }
    }
  }

  return (
    <div className='container'>
        <div className='second'>
            <img src = {logoo} className='logo'/>

            <input 
            type = "text"
            className = 'inputs' 
            name="email"
            value={sign.email}
            onChange={handleInputChange}
            required = 'required'
            />
            <span className='em'>User Name</span>

            <input  
            type = "password" 
            className = 'inpu'
            name="password"
            value={sign.password}
            onChange={handleInputChange}
            required = 'required'
            />
            <span className='pas'>Password</span>

            <button className='btn' type='button' onClick={ signin}>
                <text className='txt'>
                    Sign In
                </text>
            </button>
        </div>
    </div>
  )
}

export default Signin