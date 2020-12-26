import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { tempAction } from '../../store/actions'

class Registration extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
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
                <p class='display-4 text-center px-2'>Registration</p>
                <div class='text-center px-2'>
                  Already have an account? Click to {' '}
                  <b>
                    <Link to='/login'>Login</Link>
                  </b>
                </div>
              </div>
              <form class='row g-3 needs-validation' novalidate>
                <div class='form-floating'>
                  <input
                    type='text'
                    class='form-control ps-3'
                    id='exampleFormControlInput1'
                    placeholder='name@example.com'
                    required
                  />
                  <label for='visiting-fee' class='form-label text-muted ps-4'>
                    Full Name
                  </label>
                  <div class='invalid-feedback'>Username is required</div>
                </div>
                <div class='form-floating'>
                  <input
                    type='text'
                    class='form-control ps-3'
                    id='exampleFormControlInput1'
                    placeholder='name@example.com'
                    required
                  />
                  <label for='visiting-fee' class='form-label text-muted ps-4'>
                    Username
                  </label>
                  <div class='invalid-feedback'>Username is required</div>
                </div>
                <div class='form-group ms-2'>
                  <h6 class='text-muted'>Gender</h6>
                  <div class='form-check'>
                    <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                    <label class='form-check-label' for='flexRadioDefault1'>
                      Male
                    </label>
                  </div>
                  <div class='form-check'>
                    <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                    <label class='form-check-label' for='flexRadioDefault2'>
                      Female
                    </label>
                  </div>
                  <div class='form-check'>
                    <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                    <label class='form-check-label' for='flexRadioDefault2'>
                      Other
                    </label>
                  </div>
                </div>
                <div class='form-floating'>
                  <input
                    type='password'
                    class='form-control ps-3'
                    id='exampleFormControlInput1'
                    placeholder='name@example.com'
                    required
                  />
                  <label for='visiting-fee' class='form-label text-muted ps-4'>
                    Password
                  </label>
                  <div class='invalid-feedback'>Password is required</div>
                </div>
                <div class='col-12'>
                  <div class='form-check'>
                    <input class='form-check-input' type='checkbox' value='' id='invalidCheck' required />
                    <label class='form-check-label' for='invalidCheck'>
                      Keep logged in
                    </label>
                    <div class='invalid-feedback'>You must agree before submitting.</div>
                  </div>
                </div>
                <div class='col-12 d-flex justify-content-between align-items-center'>
                  <div>
                    Need help?{' '}
                    <strong>
                      <a href='a'>Click Here</a>
                    </strong>
                  </div>
                  <div>
                    <Link to='/login' class='btn btn-secondary mx-1'>
                      Or, Sign in
                    </Link>
                    <button class='btn btn-primary mx-1' type='submit'>
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

const mapStateToProps = state => ({
  temp : state.temp,
})
const mapDispatchToProps = dispatch => ({
  fetchTemp : payload => dispatch(tempAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
