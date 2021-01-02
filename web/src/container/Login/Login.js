import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userAction } from '../../store/actions'

class Login extends Component {
  componentDidMount() {
    if (this.props.user.ssn) window.location.reload()
  }
  state = {
    email          : '',
    password       : '',
    keep_logged_in : false,
  }

  onChange = (key, value) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState)
  }
  onSubmit = e => {
    e.preventDefault()

    this.props.fetchUser({
      email          : this.state.email,
      password       : this.state.password,
      keep_logged_in : this.state.keep_logged_in,
      push           : this.props.history.push,
    })
  }

  render() {
    const { onChange, onSubmit } = this
    const { email, password, keep_logged_in } = this.state

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
              <form className='row g-3 needs-validation' noValidate>
                <div className='form-floating'>
                  <input
                    type='text'
                    name='email'
                    className='form-control ps-3'
                    placeholder='name@example.com'
                    value={email}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    required={true}
                  />
                  <label htmlFor='username' className='form-label text-muted ps-4'>
                    Email Address or Phone
                  </label>
                  <div className='invalid-feedback'>Username is required</div>
                </div>
                <div className='form-floating'>
                  <input
                    type='password'
                    name='password'
                    className='form-control ps-3'
                    placeholder='name@example.com'
                    value={password}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    required={true}
                  />
                  <label htmlFor='password' className='form-label text-muted ps-4'>
                    Password
                  </label>
                  <div className='invalid-feedback'>Password is required</div>
                </div>
                <div className='col-12'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='keep_logged_in'
                      id='keep_logged_in'
                      value={keep_logged_in}
                      onChange={e => onChange(e.target.name, e.target.checked)}
                    />
                    <label className='form-check-label' htmlFor='keep_logged_in'>
                      Keep logged in
                    </label>
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
                    <button type='submit' className='btn btn-primary mx-1' onClick={e => onSubmit(e)}>
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

const mapStateToProps = state => ({
  user : state.user.user,
})
const mapDispatchToProps = dispatch => ({
  fetchUser : payload => dispatch(userAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
