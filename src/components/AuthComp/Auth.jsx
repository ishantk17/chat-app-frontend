import React from 'react'
import './Auth.css'
function Auth() {
  return (
    <div className="Auth">
      <h1>Login/Signup</h1>
      <form>
        <input type="email" name='email' className='email'/>
        <input type="password" name='password' className='pass'/>
        <button type='submit'>Let's Go</button>
      </form>
    </div>
  )
}
export default Auth