import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { appointmentAction } from '../../store/actions'
import { format } from 'fecha'

class Appointment extends Component {
  componentDidMount() {
    this.props.fetchAppointment()
  }

  state = {
    confirmation_modal : false,
    license_number     : '',
  }

  onChange = (key, value, func = () => null) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState, () => func())
  }
  render() {
    const { onChange } = this
    const { confirmation_modal, license_number } = this.state
    const { appointment_list, removeAppointment } = this.props

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>
              Appointment Accepted: {appointment_list.filter(item => item.is_accepted === 'A').length}
            </h6>
          </div>
          {/* Appointments */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment_list
              .filter(item => item.is_accepted === 'A')
              .map(
                ({
                  id,
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
                  <div key={id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
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
                          <button
                            className='btn btn-danger'
                            onClick={() =>
                              onChange('confirmation_modal', true, () => onChange('license_number', license_number))}
                          >
                            Cancel
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
            <h6 className='text-muted'>
              Status: {appointment_list.filter(item => item.is_accepted !== 'P' || item.is_accepted !== 'D').length}
            </h6>
          </div>
          {appointment_list
            .filter(item => item.is_accepted !== 'P' || item.is_accepted !== 'D')
            .map(
              ({
                id,
                ssn,
                license_number,
                is_accepted,
                doctor_name,
                patient_name,
                location,
                specialised,
                date,
                diagnosed_disease,
              }) => (
                <div key={id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                  <div className='card-body row'>
                    <div className='col'>
                      {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                      <h5 className='card-title mb-4'>
                        {specialised}
                        <br />
                        <small className='text-muted'>{doctor_name}</small>
                      </h5>
                      <div className='mb-2'>
                        <h6 className='mb-0 text-muted'>Location</h6>
                        <small>{location}</small>
                      </div>
                      {is_accepted === 'P' && <h6 className='text-warning'>Pending</h6>}
                      {is_accepted === 'R' && <h6 className='text-danger'>Rejected</h6>}
                    </div>
                  </div>
                </div>
              )
            )}
        </section>

        {/* Confirmation Modal */}
        {confirmation_modal && (
          <div className='modal' tabindex='-1'>
            <div
              className='backdrop'
              onClick={() => onChange('confirmation_modal', false, onChange('license_number', ''))}
            />
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Confirmation
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => onChange('confirmation_modal', false, onChange('license_number', ''))}
                  />
                </div>
                <div className='modal-body'>
                  <div className='container col d-flex flex-column justify-content-center'>
                    {/* Doctor */}
                    <h5 className='card-title my-4 text-danger'>Are you sure you want to cancel the appointment?</h5>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    className='btn btn-danger'
                    onClick={() =>
                      onChange('confirmation_modal', false, () => removeAppointment({ _id: license_number }))}
                  >
                    Cancel Appointment
                  </button>
                  <button className='btn btn-primary ms-1' onClick={() => onChange('appointment_modal', false)}>
                    Don't Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  appointment_list : state.appointment.appointment_list,
})
const mapDispatchToProps = dispatch => ({
  fetchAppointment  : payload => dispatch(appointmentAction.send.fetch(payload)),
  removeAppointment : payload => dispatch(appointmentAction.send.remove(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)
