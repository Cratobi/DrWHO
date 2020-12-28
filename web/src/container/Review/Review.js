import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {} from '../../store/actions'
import { format } from 'fecha'

class Review extends Component {
  componentDidMount() {}
  state = {
    modal : false,
  }
  onChangeHandler = (key, value) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState)
  }

  render() {
    const { onChangeHandler } = this
    const {} = this.props
    const { appointment, modal } = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>Appointment: {appointment.length}</h6>
          </div>

          {/* Reviews */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment.map(({ _id, speciality, name, location, date }) => (
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
                  </div>
                  <div className='col d-flex flex-column align-items-end'>
                    <div className='text-end'>
                      <small className='mb-0 text-muted'>Date & Time</small>
                      <h6>{format(new Date(date), 'Do MMM, YYYY (hh:mm A)')}</h6>
                    </div>
                    <div className='mt-auto'>
                      <button type='button' className='btn btn-primary' onClick={() => onChangeHandler('modal', true)}>
                        Review
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
          <div className='d-flex justify-content-between ms-3 mt-4'>
            <h6 className='text-muted' />
          </div>
        </section>

        {modal && (
          <div className='modal' tabindex='-1'>
            <div className='modal-dialog modal-lg'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Review
                  </h5>
                  <button type='button' className='btn-close' onClick={() => onChangeHandler('modal', false)} />
                </div>
                <div className='modal-body py-0'>
                  <div className='row py-0 m-0'>
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
                        {/* Review Input */}
                        <div className='row mb-3'>
                          <div className='mb-2'>
                            <label for='rating' className='form-label text-muted'>
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
                              placeholder='Leave a comment here'
                              id='floatingTextarea2'
                              style={{ height: '100%' }}
                            />
                            <label for='floatingTextarea2' className='ms-3'>
                              Feedback
                            </label>
                          </div>
                          <div className='d-flex flex-column mt-2'>
                            <button type='button' className='btn btn-primary'>
                              Save changes
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
