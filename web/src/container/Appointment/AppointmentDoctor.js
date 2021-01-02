import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import DatePicker from 'react-date-picker'

import { appointmentAction } from '../../store/actions'
import { format } from 'fecha'
class AppointmentDoctor extends Component {
  componentDidMount() {
    this.props.fetchAppointment({ ssn: 0, license_number: this.props.user.license_number })
  }
  state = {
    date           : new Date(),
    license_number : '',
    ssn            : '',
  }

  onChange = (key, value, func = () => null) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState, () => func())
  }
  onConfirm = id_appointment => {
    this.props.modifyAppointment({
      id_appointment,
      is_accepted    : 'A',
    })
    this.props.fetchAppointment({ ssn: 0, license_number: this.props.user.license_number })
  }
  onReject = id_appointment => {
    this.props.modifyAppointment({
      id_appointment,
      is_accepted    : 'R',
    })
    this.props.fetchAppointment({ ssn: 0, license_number: this.props.user.license_number })
  }
  render() {
    const { onConfirm, onReject } = this
    const { date } = this.state
    const { appointment_list, removeAppointment } = this.props

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>
              Pending Appointments: {appointment_list.filter(item => item.is_accepted === 'P').length}
            </h6>
          </div>
          {/* Appointments */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment_list
              .filter(item => item.is_accepted === 'P')
              .map(
                ({
                  id_appointment,
                  ssn,
                  license_number,
                  is_accepted,
                  doctor_name,
                  location,
                  specialised,
                  bloodgroup,
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
                        <h4 className='card-title mb-2'>{patient_name}</h4>
                        <div>
                          <h6 className='mb-0 text-muted'>Blood Group: {bloodgroup}</h6>
                        </div>
                      </div>
                      <div className='col d-flex flex-column align-items-end'>
                        <div className='text-end'>
                          <small className='mb-0 text-muted'>Age</small>
                          <h6>20 years</h6>
                        </div>
                      </div>
                      <div className='row m-0 p-0'>
                        <div className='d-flex justify-content-end align-items-center'>
                          <div className='input-group mb-2' style={{ width: 'auto' }}>
                            {/* <span className='appointment-datepicker'>
                              <DatePicker
                                onChange={date => this.onChange('date', date)}
                                format='dd / MM / y'
                                value={this.state.date}
                              />
                            </span> */}
                            <button className='btn btn-primary' onClick={() => onConfirm(id_appointment)}>
                              Confirm
                            </button>
                          </div>
                          <button className='btn btn-danger mb-2 ms-3' onClick={() => onReject(id_appointment)}>
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
              Scheduled: {appointment_list.filter(item => item.is_accepted === 'A').length}
            </h6>
          </div>
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
                bloodgroup,
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
                      <h5 className='card-title mb-4'>{patient_name}</h5>
                      <div className='mb-2'>
                        <h6 className='mb-0 text-muted'>Blood Group</h6>
                        <small>{bloodgroup}</small>
                      </div>
                      <div className='mb-2'>
                        <h6 className='mb-0 text-muted'>Date</h6>
                        <small>{format(new Date(date), 'Do MMM, YYYY (hh:mm A)')}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </section>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user             : state.user.user,
  appointment_list : state.appointment.appointment_list,
})
const mapDispatchToProps = dispatch => ({
  fetchAppointment  : payload => dispatch(appointmentAction.send.fetch(payload)),
  modifyAppointment : payload => dispatch(appointmentAction.send.modify(payload)),
  removeAppointment : payload => dispatch(appointmentAction.send.remove(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDoctor)
