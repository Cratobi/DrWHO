import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { doctorAction } from '../../store/actions'

class Search extends Component {
  componentDidMount() {
    this.onFilterChange()
  }

  state = {
    modal           : false,
    search          : '',
    location        : 'bangladesh',
    rating          : 5,
    visint_fee_0    : true,
    visint_fee_100  : true,
    visint_fee_200  : true,
    visint_fee_500  : true,
    visint_fee_1000 : true,
    visint_fee_2000 : true,
    specialised     : 'specialised_all',
  }

  onChange = (key, value) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState)
    this.onFilterChange()
  }
  onFilterChange = () => {
    this.props.fetchDoctor({
      search          : this.state.search,
      location        : this.state.location,
      rating          : this.state.rating,
      visint_fee_0    : this.state.visint_fee_0,
      visint_fee_100  : this.state.visint_fee_100,
      visint_fee_200  : this.state.visint_fee_200,
      visint_fee_500  : this.state.visint_fee_500,
      visint_fee_1000 : this.state.visint_fee_1000,
      visint_fee_2000 : this.state.visint_fee_2000,
      specialised     : this.state.specialised,
    })
  }
  onNewAppointment = license_number => {
    this.props.createAppointment({
      ssn            : 3,
      license_number,
    })
  }

  render() {
    const { onChange, onNewAppointment } = this
    const { doctor_list } = this.props
    const {
      modal,
      search,
      location,
      rating,
      visint_fee_0,
      visint_fee_100,
      visint_fee_200,
      visint_fee_500,
      visint_fee_1000,
      visint_fee_2000,
      specialised,
    } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>Results: {doctor_list.length}</h6>
          </div>

          {/* Search Result */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {doctor_list.map(({ _id, name, qualification, location, rating, visiting }) => (
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
                      <button className='btn btn-secondary ms-1' onClick={() => onChange('modal', true)}>
                        See Review
                      </button>
                      <button className='btn btn-primary ms-1' onClick={() => onNewAppointment(_id)}>
                        Ask for appointment
                      </button>
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
              {/* Location */}
              <div>
                <div className='form-floating'>
                  <div className='form-floating'>
                    <input
                      type='search'
                      className='form-control ps-3'
                      id='search'
                      placeholder='Search'
                      onChange={e => onChange('search', e.target.value)}
                      value={search}
                    />
                    <label htmlFor='search' className='ps-3'>
                      Search...
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              {/* Rating */}
              <div className='mb-2'>
                <label htmlFor='rating' className='form-label text-muted'>
                  Rating
                </label>
                <input
                  type='range'
                  className='form-control-range'
                  min='1'
                  max='5'
                  step='1'
                  id='rating'
                  style={{ width: '100%' }}
                  value={rating}
                  onChange={e => onChange('rating', e.target.value)}
                />
                <div className='d-flex justify-content-between px-1'>
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                </div>
              </div>
              <hr />
              {/* Visiting Fee */}
              <div>
                <label htmlFor='location' className='form-label text-muted'>
                  Visiting Fee
                </label>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_0'
                    checked={visint_fee_0}
                    onChange={e => onChange('visint_fee_0', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_0'>
                    0 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_100'
                    checked={visint_fee_100}
                    onChange={e => onChange('visint_fee_100', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_100'>
                    100 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_200'
                    checked={visint_fee_200}
                    onChange={e => onChange('visint_fee_200', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_200'>
                    200 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_500'
                    checked={visint_fee_500}
                    onChange={e => onChange('visint_fee_500', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_500'>
                    500 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_1000'
                    checked={visint_fee_1000}
                    onChange={e => onChange('visint_fee_1000', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_1000'>
                    1,000 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='fee_2000'
                    checked={visint_fee_2000}
                    onChange={e => onChange('visint_fee_2000', e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='fee_2000'>
                    2,000 ৳
                  </label>
                </div>
              </div>
              <hr />
              {/* Specialized */}
              <div>
                <label className='form-label text-muted'>Specialized</label>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised'
                    id='specialised_all'
                    checked={specialised === 'specialised_all'}
                    onChange={e => onChange('specialised', e.target.id)}
                  />
                  <label className='form-check-label' htmlFor='specialised_all'>
                    All
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised'
                    id='specialised_eye'
                    checked={specialised === 'specialised_eye'}
                    onChange={e => onChange('specialised', e.target.id)}
                  />
                  <label className='form-check-label' htmlFor='specialised_eye'>
                    Eye
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised'
                    id='specialised_heart'
                    checked={specialised === 'specialised_heart'}
                    onChange={e => onChange('specialised', e.target.id)}
                  />
                  <label className='form-check-label' htmlFor='specialised_heart'>
                    Heart
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised'
                    id='specialised_kidney'
                    checked={specialised === 'specialised_kidney'}
                    onChange={e => onChange('specialised', e.target.id)}
                  />
                  <label className='form-check-label' htmlFor='specialised_kidney'>
                    Kidney
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised'
                    id='specialised_dermatologist'
                    checked={specialised === 'specialised_dermatologist'}
                    onChange={e => onChange('specialised', e.target.id)}
                  />
                  <label className='form-check-label' htmlFor='specialised_dermatologist'>
                    Dermatologist
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {modal && (
          <div className='modal' tabindex='-1'>
            <div className='modal-dialog modal-lg'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Details
                  </h5>
                  <button type='button' className='btn-close' onClick={() => onChange('modal', false)} />
                </div>
                <div className='modal-body py-0'>
                  <div className='row py-0 m-0'>
                    <div className='col-md-4'>
                      <div
                        className='container col d-flex flex-column justify-content-between px-2'
                        style={{ height: '100%' }}
                      >
                        {/* Doctor */}
                        <div className='row'>
                          <h4 className='card-title mt-2'>
                            name
                            <br />
                            <small className='text-muted'>Specialized</small>
                          </h4>
                          <div className='mb-3'>
                            <h6 className='mb-0'>Rating: 4/5</h6>
                          </div>
                          <div className='mb-1'>
                            <small className='text-muted'>Qualification</small>
                            <h6 className='mb-0'>qualification</h6>
                          </div>
                          <div className='mb-1'>
                            <small className='text-muted'>Location</small>
                            <h6 className='mb-0'>location</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-8 m-0 py-4 scrollable'>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                      <div className='card my-1'>
                        <div className='card-body'>
                          <div className='d-flex justify-content-between px-1'>
                            <h6>Name</h6>
                            <b>1/5</b>
                          </div>
                          <hr />
                          <p>Lorem ipson</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer' />
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  doctor_list : state.doctor.doctor_list,
})
const mapDispatchToProps = dispatch => ({
  fetchDoctor  : payload => dispatch(doctorAction.send.fetch(payload)),
  createDoctor : payload => dispatch(doctorAction.send.create(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
