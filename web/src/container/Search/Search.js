import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { appointmentAction, doctorAction, reviewAction } from '../../store/actions'

class Search extends Component {
  componentDidMount() {
    this.onFilterChange()
  }

  state = {
    license_number    : '',
    appointment_modal : false,
    review_modal      : false,
    search            : '',
    location          : 'bangladesh',
    rating            : 5,
    visint_fee_0      : true,
    visint_fee_100    : true,
    visint_fee_200    : true,
    visint_fee_500    : true,
    visint_fee_1000   : true,
    visint_fee_2000   : true,
    specialised       : 'specialised_all',
  }

  onChange = (key, value, func = () => null) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState, () => func())
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
      ssn            : this.props.ssn,
      license_number,
    })
    this.props.history.push('/patient/appointments')
  }

  render() {
    const { onChange, onNewAppointment, onFilterChange } = this
    const { doctor_list, review_list, fetchReview } = this.props
    const {
      license_number,
      appointment_modal,
      review_modal,
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
          <div className='d-flex justify-content-between mx-5 mt-4 mb-2'>
            <h6 className='text-muted'>Results: {doctor_list.length}</h6>
          </div>

          {/* Search Result */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {doctor_list.map(({ license_number, name, graduated_college, location, rating, visiting_fee }) => (
              <div key={license_number} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                <div className='card-body row'>
                  <div className='col'>
                    {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                    <h4 className='card-title mb-4'>
                      {name}
                      <br />
                      <small className='text-muted'>{specialised}</small>
                    </h4>
                    <div className='mb-2'>
                      <h6 className='mb-0 text-muted'>Location</h6>
                      <small>{location}</small>
                    </div>
                    <div>
                      <h6 className='mb-0 text-muted'>Qualification</h6>
                      <small>{graduated_college}</small>
                    </div>
                  </div>
                  <div className='col d-flex flex-column align-items-end'>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Review</small>
                      <h5>{rating}</h5>
                    </div>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Visiting</small>
                      <h5>{visiting_fee} Taka</h5>
                    </div>
                    <div className='mt-auto'>
                      <button
                        className='btn btn-secondary ms-1'
                        onClick={() =>
                          onChange('review_modal', true, () =>
                            onChange('license_number', license_number, () => fetchReview({ license_number }))
                          )}
                      >
                        See Review
                      </button>
                      <button
                        className='btn btn-primary ms-1'
                        onClick={e =>
                          onChange('appointment_modal', true, () =>
                            onChange('license_number', license_number, () => fetchReview({ license_number }))
                          )}
                      >
                        Ask for Appointment
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
                      name='search'
                      id='search'
                      placeholder='Search'
                      onChange={e => onChange(e.target.name, e.target.value, onFilterChange)}
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
                  name='rating'
                  id='rating'
                  min='1'
                  max='5'
                  step='1'
                  style={{ width: '100%' }}
                  value={rating}
                  onChange={e => onChange(e.target.name, e.target.value, onFilterChange)}
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
                    name='visint_fee_0'
                    id='visint_fee_0'
                    checked={visint_fee_0}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_0'>
                    0 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='visint_fee_100'
                    id='visint_fee_100'
                    checked={visint_fee_100}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_100'>
                    100 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='visint_fee_200'
                    id='visint_fee_200'
                    checked={visint_fee_200}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_200'>
                    200 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='visint_fee_500'
                    id='visint_fee_500'
                    checked={visint_fee_500}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_500'>
                    500 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='visint_fee_1000'
                    id='visint_fee_1000'
                    checked={visint_fee_1000}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_1000'>
                    1,000 ৳
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='visint_fee_2000'
                    id='visint_fee_2000'
                    checked={visint_fee_2000}
                    onChange={e => onChange(e.target.name, e.target.checked, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='visint_fee_2000'>
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
                    name='specialised_all'
                    id='specialised_all'
                    checked={specialised === 'specialised_all'}
                    onChange={e => onChange('specialised', e.target.name, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='specialised_all'>
                    All
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised_eye'
                    id='specialised_eye'
                    checked={specialised === 'specialised_eye'}
                    onChange={e => onChange('specialised', e.target.name, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='specialised_eye'>
                    Eye
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised_heart'
                    id='specialised_heart'
                    checked={specialised === 'specialised_heart'}
                    onChange={e => onChange('specialised', e.target.name, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='specialised_heart'>
                    Heart
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised_kidney'
                    id='specialised_kidney'
                    checked={specialised === 'specialised_kidney'}
                    onChange={e => onChange('specialised', e.target.name, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='specialised_kidney'>
                    Kidney
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='specialised_dermatologist'
                    id='specialised_dermatologist'
                    checked={specialised === 'specialised_dermatologist'}
                    onChange={e => onChange('specialised', e.target.name, onFilterChange)}
                  />
                  <label className='form-check-label' htmlFor='specialised_dermatologist'>
                    Dermatologist
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {appointment_modal &&
        license_number && (
          <div className='modal' tabindex='-1'>
            <div
              className='backdrop'
              onClick={() => onChange('appointment_modal', false, onChange('license_number', ''))}
            />
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Details
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => onChange('appointment_modal', false, onChange('license_number', ''))}
                  />
                </div>
                <div className='modal-body py-0'>
                  <div className='row py-0 m-0'>
                    <div className='col-md-4'>
                      <div
                        className='container col d-flex flex-column justify-content-between pt-2 px-2'
                        style={{ height: '100%' }}
                      >
                        {/* Doctor */}
                        <div className='row'>
                          <h4 className='card-title mt-2'>
                            name
                            <br />
                            <small className='text-muted'>Specialized</small>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-8 m-0 py-4 scrollable'>
                      <div className='mb-3'>
                        <h6 className='mb-0'>Rating: 4/5</h6>
                      </div>
                      <div className='mb-1'>
                        <small className='text-muted'>Location</small>
                        <h6 className='mb-0'>location</h6>
                      </div>
                      <div className='mb-1'>
                        <small className='text-muted'>Qualification</small>
                        <h6 className='mb-0'>qualification</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button className='btn btn-secondary ms-1' onClick={() => onChange('appointment_modal', false)}>
                    Cancel
                  </button>
                  <button className='btn btn-primary ms-1' onClick={() => onNewAppointment(license_number)}>
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {review_modal &&
        license_number && (
          <div className='modal' tabindex='-1'>
            <div className='backdrop' onClick={() => onChange('review_modal', false, onChange('license_number', ''))} />
            <div className='modal-dialog modal-dialog-centered modal-lg'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Review
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => {
                      onChange('license_number', '')
                      onChange('review_modal', false)
                    }}
                  />
                </div>
                <div className='modal-body py-0'>
                  <div className='row py-0 m-0'>
                    <div className='col-4'>
                      <div
                        className='container col d-flex flex-column justify-content-between pt-1 px-2'
                        style={{ height: '100%' }}
                      >
                        {/* Review */}
                        <div className='row'>
                          <h4 className='card-title mt-2'>
                            {doctor_list.find(e => e.license_number === license_number).name}
                            <br />
                            <small className='text-muted'>Dermatologist</small>
                          </h4>
                          <div className='mb-3'>
                            <h6 className='mb-0 text-primary'>
                              Rating: {doctor_list.find(e => e.license_number === license_number).rating}/5
                            </h6>
                          </div>
                          <div className='mb-1'>
                            <small className='text-muted'>Qualification</small>
                            <h6 className='mb-0'>
                              Dhaka Medical
                              {/* {doctor_list.find(e => e._id === license_number).qualification} */}
                            </h6>
                          </div>
                          <div className='mb-1'>
                            <small className='text-muted'>Location</small>
                            <h6 className='mb-0'>
                              {doctor_list.find(e => e.license_number === license_number).location}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-8 m-0 py-4 scrollable'>
                      {review_list.map(({ id, name, ratings, comments }) => (
                        <div key={id} className='card my-1'>
                          <div className='card-body'>
                            <div className='d-flex justify-content-between px-1'>
                              <h6>{name}</h6>
                              <b>{ratings}/5</b>
                            </div>
                            <hr />
                            <p>{comments}</p>
                          </div>
                        </div>
                      ))}
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
  review_list : state.review.review_list,
  ssn         : state.user.ssn,
})
const mapDispatchToProps = dispatch => ({
  fetchDoctor       : payload => dispatch(doctorAction.send.fetch(payload)),
  fetchReview       : payload => dispatch(reviewAction.send.fetch(payload)),
  createAppointment : payload => dispatch(appointmentAction.send.create(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
