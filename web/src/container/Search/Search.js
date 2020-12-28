import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

class Search extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {
    result : [],
  }

  render() {
    const { result } = this.state
    const { temp } = this.props
    const { result } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>Results: {result.length}</h6>
          </div>

          {/* Search Result */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {result.map(({ avatar, name, qualification, location, rating, visiting }) => (
              <div className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                <div className='card-body row'>
                  <div className='col'>
                    {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                      <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                    </figure> */}
                    <h4 className='card-title mb-4'>
                      {name}
                      <br />
                      <small className='text-muted'>Specialized</small>
                    </h4>
                    <div className='mb-2'>
                      <h6 className='mb-0 text-muted'>Location</h6>
                      <small>{location}</small>
                    </div>
                    <div>
                      <h6 className='mb-0 text-muted'>Qualification</h6>
                      <small>{qualification}</small>
                    </div>
                  </div>
                  <div className='col d-flex flex-column align-items-end'>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Review</small>
                      <h5>{rating}</h5>
                    </div>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Visiting</small>
                      <h5>{visiting} Taka</h5>
                    </div>
                    <div className='mt-auto'>
                      <button className='btn btn-secondary ms-1'>See Review</button>
                      <button className='btn btn-primary ms-1'>Ask for appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Bar */}
        <section className='col-3 hanging'>
          <div className='container py-4'>
            <div className='card-title mb-4'>
              <div className='mb-2'>
                <label for='visiting-fee' className='form-label text-muted'>
                  Visiting Fee (0 - 2000taka)
                </label>
                <input type='range' className='form-range' min='0' max='2000' step='100' id='visiting-fee' />
              </div>
              <div className='form-floating'>
                <select className='form-select' id='location'>
                  <option selected>Dhaka</option>
                  <option value='gulshan-1'>Gulshan 1</option>
                </select>
                <label for='visiting-fee' className='form-label text-muted'>
                  Visiting Fee
                </label>
              </div>
              <hr />
              <div>
                <label for='exampleFormControlTextarea1' className='form-label text-muted'>
                  Specialized
                </label>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='specialised' id='specialised-all' checked />
                  <label className='form-check-label' for='specialised-all'>
                    All
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='specialised' id='specialised-eye' />
                  <label className='form-check-label' for='specialised-eye'>
                    Eye
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='specialised' id='specialised-heart' />
                  <label className='form-check-label' for='specialised-heart'>
                    Heart
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='specialised' id='specialised-kidney' />
                  <label className='form-check-label' for='specialised-kidney'>
                    Kidney
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='specialised' id='specialised-dermatologist' />
                  <label className='form-check-label' for='specialised-dermatologist'>
                    Dermatologist
                  </label>
                </div>
              </div>
            </div>

            <div className='card-container' style={{ backgroundColor: 'red' }}>
              {result.map(({ id, avatar, name, specialised, qualification, location, rating }) => (
                <div class='card result' key={id}>
                  <div className='flex flex-d-row flex-pos-between'>
                    {/* <img src={avatar} /> */}
                    <div>IMG</div>
                    <div className='p-left-2'>
                      <h3>{name}</h3>
                      <h5>{specialised}</h5>
                    </div>
                  </div>
                  <div className='p-top-2'>
                    <h5>Qualification</h5>
                    <p>{qualification}</p>
                  </div>
                  <div className='flex'>
                    <div>
                      <h5>Location</h5>
                      <p>{location}</p>
                    </div>
                    <div>
                      <h5>Rating</h5>
                      <p>{rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <form>
              <Input type='text' label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
              <formGroup>
                <Input label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
                <Password label='label' placeholder='i.e. Whatever' icon='home' value='aaa' />
              </formGroup>
              <label className='lebel-checkbox'>
                <input type='checkbox' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
              <label className='lebel-radio'>
                <input type='radio' name='a' />
                <x-text>Title</x-text>
              </label>
            </form> */}
          </section>
          <section className='aside'>Location</section>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
