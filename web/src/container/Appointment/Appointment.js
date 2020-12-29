import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { appointmentAction } from '../../store/actions'
import { format } from 'fecha'

class Appointment extends Component {
  componentDidMount() {
    this.props.fetchAppointment()
  }

  state = {}

  render() {
    const { appointment_list, removeAppointment } = this.props
    const {} = this.state

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            {/* <h6 className='text-muted'>Appointments: {appointment_list.length}</h6> */}
          </div>
          {/* Appointments */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment_list.filter(item => item.status === 2).map(({ _id, speciality, name, location, date }) => (
              <div key={_id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
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
                      <button className='btn btn-danger' onClick={() => removeAppointment({ _id })}>
                        Cancel
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
            {/* <h6 className='text-muted'>Status: {appointment_list.length}</h6> */}
          </div>
          {appointment_list.filter(item => item.status !== 2).map(({ _id, speciality, name, location, status }) => (
            <div key={_id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
              <div className='card-body row'>
                <div className='col'>
                  {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                  <h5 className='card-title mb-4'>
                    {speciality}
                    <br />
                    <small className='text-muted'>{name}</small>
                  </h5>
                  <div className='mb-2'>
                    <h6 className='mb-0 text-muted'>Location</h6>
                    <small>{location}</small>
                  </div>
                  {status === 1 && <h6 className='text-warning'>Pending</h6>}
                  {status === 0 && <h6 className='text-danger'>Rejected</h6>}
                </div>
              </div>
            </div>
          ))}
        </section>
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
