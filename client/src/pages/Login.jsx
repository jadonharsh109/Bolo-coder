import React from 'react'
import styled from 'styled-components';
import svg from '../images/undraw_remotely_2j6y.svg'

const Login = () => {

  const Wrapper = styled.section`
  .login{
    height: 100vh;
    align-items: center;
  .svg-login{
    display: flex;
    justify-content: center;
  }
  .login-form form{
    height: 65vh;
    background-color: transparent;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .login-form form h3{
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin: 1rem 0;
  }
  .login-form form p{
    font-weight: 100;
    font-size: 1.8rem;
    margin: 1rem 0;
    text-align: center;
  }
  .login-form form input[type="password"], input[type="email"]{
    padding: 2rem 1rem;
    background: #edf2f5;
    border: 0;
    cursor: inherit;
    outline: none ;
  }
  .top-border{
    border-radius: 1rem 1rem 0 0; ;
  }
  .down-border{
    border-radius: 0 0 1rem 1rem ;
  }
  .login-form form button{
    border-radius: 0.5rem;
    background: #644B9B;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 1rem;
    cursor: pointer;
    margin: 0.75rem 0;
    outline: none;
    border: 0;
  }
  .login-form form button:hover{
    background-color: #301E67;
    transition: 0.2s;
  }

  }
  `

  return (
    <Wrapper>
      <div className="login grid grid-two-column">

      <div className='svg-login'>
        <img src={svg} alt="Svg Logo" />
      </div>
      <div className=''>
        <div className="login-form">
          <form action="">
          <h3>Sign In</h3>
          <p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
          <input type="email"className='top-border' placeholder='Username' required/>
          <input type="password" className='down-border' placeholder='Password' required/>
          <button type='submit'>Log In</button>
          </form>
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default Login