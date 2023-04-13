import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
    
    return (
    <div className='login'>
        <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>
            <button onClick={register} className='login_registerButton'>Create New Account</button>
        </div>

    </div>
  )
}

export default Login
