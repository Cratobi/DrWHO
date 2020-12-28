import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {} from '../../store/actions'

class Login extends Component {
  componentDidMount() {}
  state = {}

  render() {
    const { temp } = this.props
    const { appointment, status } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col d-flex flex-basis-auto justify-content-center align-items-center'>
          {/* Login */}
          <div className='card my-5 shadow-sm' style={{ width: '30rem' }}>
            <div className='card-body p-4'>
              <div className='mb-4'>
                <p className='display-4 text-center px-2'>Login</p>
                <div className='text-center px-2'>
                  Don't have an account? Click to {' '}
                  <b>
                    <Link to='/registration'>Signup</Link>
                  </b>
                </div>
              </div>
              <form className='row g-3 needs-validation' novalidate>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control ps-3'
                    id='exampleFormControlInput1'
                    placeholder='name@example.com'
                    required
                  />
                  <label for='visiting-fee' className='form-label text-muted ps-4'>
                    Username
                  </label>
                  <div className='invalid-feedback'>Username is required</div>
                </div>
                <div className='form-floating'>
                  <input
                    type='password'
                    className='form-control ps-3'
                    id='exampleFormControlInput1'
                    placeholder='name@example.com'
                    required
                  />
                  <label for='visiting-fee' className='form-label text-muted ps-4'>
                    Password
                  </label>
                  <div className='invalid-feedback'>Password is required</div>
                </div>
                <div className='col-12'>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value='' id='invalidCheck' required />
                    <label className='form-check-label' for='invalidCheck'>
                      Keep logged in
                    </label>
                    <div className='invalid-feedback'>You must agree before submitting.</div>
                  </div>
                </div>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                  <div>
                    Need help?{' '}
                    <strong>
                      <Link to='/help'>Click here</Link>
                    </strong>
                  </div>
                  <div>
                    <Link to='/registration' className='btn btn-secondary mx-1'>
                      Or, Register
                    </Link>
                    <button className='btn btn-primary mx-1' type='submit'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Right Bar */}
        <section className='col-3' />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
