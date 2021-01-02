import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { reviewAction, appointmentAction } from '../../store/actions'

class Review extends Component {
  componentDidMount() {
    this.props.fetchAppointment({ ssn: 9, license_number: '' })
  }
  state = {
    id_appointment : '',
    review_modal   : '',
    license_number : '',
    ratings        : '0',
    comments       : '',
  }

  onChange = (key, value, func = () => null) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState, () => func())
  }

  onSendReview = () => {
    this.props.createReview({
      license_number : this.state.license_number,
      ratings        : +this.state.ratings,
      comments       : this.state.comments,
      given_by       : 9,
    })

    this.setState({
      review_modal   : false,
      license_number : '',
      id_appointment : '',
      ratings        : '0',
      comments       : '',
    })
  }

  render() {
    const { onChange, onSendReview } = this
    const { review_list, appointment_list } = this.props
    const { id_appointment, review_modal, ratings, comments } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>Medical Records: {appointment_list.filter(item => item.status === 2).length}</h6>
          </div>

          {/* Reviews */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment_list
              .filter(item => item.is_accepted === 'A')
              .map(
                ({
                  id_appointment,
                  ssn,
                  license_number,
                  is_accepted,
                  doctor_name,
                  location,
                  specialised,
                  patient_name,
                  date,
                  diagnosed_disease,
                }) => (
                  <div key={id_appointment} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                    <div className='card-body row'>
                      <div className='col'>
                        {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                        <h4 className='card-title mb-4'>
                          {doctor_name}
                          <br />
                          <small className='text-muted'>{specialised}</small>
                        </h4>
                        <div className='mb-2'>
                          <h6 className='mb-0 text-muted'>Medical comments</h6>
                          <small>{diagnosed_disease}</small>
                        </div>
                        {/* <div className='mb-2'>
                          <h6 className='text-muted'>Diagnosis Report</h6>
                          <a href='#' className='fw-bold font-monospace text-decoration-underline'>
                            <i className='material-icons fs-6'>attach_file</i>
                            Download File
                          </a>
                        </div>*/}
                      </div>
                      <div className='col d-flex flex-column align-items-end'>
                        {/* <<div className='text-end'>
                          <small className='mb-0 text-muted'>Date & Time</small>
                          h6>{format(new Date(date), 'Do MMM, YYYY (hh:mm A)')}</h6>
                        </div>*/}
                        <div className='mt-auto'>
                          <button
                            className='btn btn-primary ms-1'
                            onClick={() =>
                              onChange('id_appointment', id_appointment, () =>
                                onChange('license_number', license_number, () =>
                                  onChange('review_modal', true, () =>
                                    this.props.fetchReview({ license_number, id_review: '' })
                                  )
                                )
                              )}
                          >
                            Give Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </section>
        {/* Right Bar */}
        <section className='col-3 hanging'>
          <div className='d-flex justify-content-between ms-3 mt-4'>
            <h6 className='text-muted' />
          </div>
        </section>

        {review_modal &&
        id_appointment && (
          <div className='modal' tabindex='-1'>
            <div
              className='backdrop'
              onClick={() => onChange('review_modal', false, () => onChange('id_appointment', ''))}
            />
            <div className='modal-dialog modal-dialog-centered modal-lg'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Review
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => onChange('review_modal', false, () => onChange('id_appointment', ''))}
                  />
                </div>
                <div className='modal-body py-0'>
                  <div className='row py-0 m-0'>
                    <div className='col-md-8 m-0 py-4 scrollable'>
                      {review_list.length != 0 &&
                        review_list.map(({ id_review, name, ratings, comments }) => (
                          <div key={id_review} className='card my-1'>
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
                    <div className='col-md-4'>
                      <div
                        className='container col d-flex flex-column justify-content-between px-2'
                        style={{ height: '100%' }}
                      >
                        {/* Review */}
                        <div className='row'>
                          <h4 className='card-title mt-2'>
                            {appointment_list.find(e => e.id_appointment === id_appointment).doctor_name}
                            <br />
                            <small className='text-muted'>
                              {appointment_list.find(e => e.id_appointment === id_appointment).specialised}
                            </small>
                          </h4>
                          <div className='mb-2'>
                            <h6 className='mb-0 text-primary'>
                              Rating: {appointment_list.find(e => e.id_appointment === id_appointment).ratings}/5
                            </h6>
                          </div>
                          <div className='mb-1'>
                            <small className='text-muted'>Location</small>
                            <h6 className='mb-0'>
                              {appointment_list.find(e => e.id_appointment === id_appointment).location}
                            </h6>
                          </div>
                        </div>
                        {/* Review Input */}
                        <div className='row mb-3'>
                          <div className='mb-2'>
                            <label htmlFor='ratings' className='form-label text-muted'>
                              Rating
                            </label>
                            <input
                              type='range'
                              className='form-control-range'
                              name='ratings'
                              id='ratings'
                              min='1'
                              max='5'
                              step='1'
                              style={{ width: '100%' }}
                              value={ratings}
                              onChange={e => onChange(e.target.name, e.target.value)}
                            />
                            <div className='d-flex justify-content-between px-1'>
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                            </div>
                          </div>
                          <div className='form-floating'>
                            <textarea
                              className='form-control'
                              placeholder='Leave a comments here'
                              id='comments'
                              name='comments'
                              style={{ height: '100%', maxHeight: '7rem' }}
                              value={comments}
                              onChange={e => onChange(e.target.name, e.target.value)}
                            />
                            <label htmlFor='comments' className='ms-2'>
                              comments
                            </label>
                          </div>
                          <div className='d-flex flex-column mt-2'>
                            <button type='button' className='btn btn-primary' onClick={onSendReview}>
                              Send Review
                            </button>
                          </div>
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
  ssn              : state.user.ssn,
  review_list      : state.review.review_list,
  appointment_list : state.appointment.appointment_list,
})
const mapDispatchToProps = dispatch => ({
  fetchReview      : payload => dispatch(reviewAction.send.fetch(payload)),
  createReview     : payload => dispatch(reviewAction.send.create(payload)),
  fetchAppointment : payload => dispatch(appointmentAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
