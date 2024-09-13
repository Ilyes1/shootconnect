import React from 'react'
import middleCircle from '../../../assets/images/login-middle-circle.svg'
import bottomCircle from '../../../assets/images/login-bottom-circle.svg'
import { Link } from 'react-router-dom'

const LoginSection = () => {
  return (
    <section className="login-section">

        <img src={middleCircle} alt="circle" className='login-middle-circle' />
        <img src={bottomCircle} alt="circle" className='login-bottom-circle' />

        <div className="container login-content">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="section-headline-light">Login to ShootConnect</h1>
                    <h6 className='section-sub-headline-light'>Access your personalized dashboard and start tracking your progress today.</h6>
                    <form className="login-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label">Email <span>*</span></label>
                                    <input type="email" id='email' name='email' placeholder='Email' className='text-field' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-field">
                                    <label htmlFor="password" className="form-label">Password <span>*</span></label>
                                    <input type="password" id='password' name='password' placeholder='Password' className='text-field' />
                                </div>
                            </div>
                        </div>
                        <div className="form-submit">
                            <button className="default-btn">Login</button>
                        </div>
                        <h6 className="form-links">
                            <Link to={'#'}>Forgot Password </Link> and <Link to={'#'}> Sign Up</Link>
                        </h6>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginSection