import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {} from '../../store/actions'

class Registration extends Component {
  componentDidMount() {}
  state = {}

  render() {
    const { temp } = this.props
    const { appointment, status } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col d-flex flex-basis-auto justify-content-center align-items-center'>
          {/* Registration */}
          <div className='card my-5 shadow-sm' style={{ width: '30rem' }}>
            <div className='card-body p-4'>
              <div className='mb-4'>
                <p className='display-6 text-center px-2'>Registration</p>
                <div className='text-center px-2'>
                  Already have an account? Click to {' '}
                  <b>
                    <Link to='/login'>Login</Link>
                  </b>
                </div>
              </div>
              <form className='row g-3 needs-validation' noValidate>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control ps-3'
                    name='name'
                    id='name'
                    placeholder='name@example.com'
                    required
                  />
                  <label htmlFor='username' className='form-label text-muted ps-4'>
                    Full Name
                  </label>
                  <div className='invalid-feedback'>Username is required</div>
                </div>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control ps-3'
                    name='username'
                    id='username'
                    placeholder='name@example.com'
                    required
                  />
                  <label htmlFor='username' className='form-label text-muted ps-4'>
                    Username
                  </label>
                  <div className='invalid-feedback'>Username is required</div>
                </div>
                <div className='form-floating'>
                  <input
                    type='password'
                    className='form-control ps-3'
                    name='password'
                    id='password'
                    placeholder='name@example.com'
                    required
                  />
                  <label htmlFor='password' className='form-label text-muted ps-4'>
                    Password
                  </label>
                  <div className='invalid-feedback'>Password is required</div>
                </div>
                <div className='form-group ms-2'>
                  <h6 className='text-muted'>Gender</h6>
                  <div className='form-check'>
                    <input className='form-check-input' type='radio' name='gender' id='gender_male' />
                    <label className='form-check-label' htmlFor='gender_male'>
                      Male
                    </label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='radio' name='gender' id='gender_female' />
                    <label className='form-check-label' htmlFor='gender_female'>
                      Female
                    </label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='radio' name='gender' id='gender_other' />
                    <label className='form-check-label' htmlFor='gender_other'>
                      Other
                    </label>
                  </div>
                </div>
                <div className='form-floating'>
                  <select className='form-select ps-3' id='floatingSelect'>
                    <option selected>Don't know</option>
                    <option value='A+'> A + (A Positive) </option>
                    <option value='A-'> A - (A Negative) </option>
                    <option value='B+'> B + (B Positive) </option>
                    <option value='B-'> B - (B Negative) </option>
                    <option value='AB+'> AB + (AB Positive) </option>
                    <option value='AB-'> AB - (AB Negative) </option>
                    <option value='O+'> O + (O Positive) </option>
                    <option value='O-'> O - (O Negative) </option>
                  </select>
                  <label htmlFor='floatingSelect' className='ps-4'>
                    Blood Grooup
                  </label>
                </div>
                <div className='col-12'>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value='' id='invalidCheck' required />
                    <label className='form-check-label' htmlFor='invalidCheck'>
                      Keep logged in
                    </label>
                    <div className='invalid-feedback'>You must agree before submitting.</div>
                  </div>
                </div>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                  <div>
                    Need help?{' '}
                    <strong>
                      <a href='a'>Click Here</a>
                    </strong>
                  </div>
                  <div>
                    <Link to='/login' className='btn btn-secondary mx-1'>
                      Or, Sign in
                    </Link>
                    <button className='btn btn-primary mx-1' type='submit'>
                      Sign up
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
