import React from "react";

const RegisterPage = () => {
  return (
    <form className='login'>
        <h1>Register</h1>
    <input type="text" name="username" placeholder='Username' />
    <input type="password" name='password' placeholder='Password' />
    <button>Register</button>
    </form>
    
  )
}

export default RegisterPage;
