import { assets } from '../../assets/assets';
import './Login.css';

import React, { useState } from 'react'

const Login = ({setLogin}) => {

const [state,setState] = useState("Login")

  return (
    <div>
<div className='login'>

  <form className='login-cotainer'>

<div className='login-title'>

<h2>{state}</h2>

<img onClick={()=>setLogin(false)} src={assets.cross_icon}/>

</div>
<div className='login-input'>

{state==="Login" ? <></>:

<input type='text' placeholder='your name' required/>}
  <input type='email' placeholder='Email' required/>
  <input type='password' placeholder='Password' required/>
</div>

<button>{state==="SignUp"?"CreateAccount":"Login"}</button>



<div className='login-popup-condition'>

  <input type='checkbox'  required/>
  <p>By continuing, I agreed to the terms and policy</p>
</div>

{state==="Login" ?<p>Create a new Account<span onClick={()=>setState("SignUp")} > Click here</span></p>:

<p>Already have an account<span onClick={()=>setState("Login")}> Login here</span></p>}
 
 

  </form>
</div>

    </div>
  )
}

export default Login