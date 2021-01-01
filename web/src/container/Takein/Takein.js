import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Files from 'react-butterfiles'
import { format } from 'fecha'

import { appointmentAction } from '../../store/actions'

class Takein extends Component {
  componentDidMount() {
    this.props.fetchAppointment()
  }

  state = {
    files             : [],
    errors            : [],
    diagnosed_disease : '',
    takein_modal      : false,
    ssn               : '',
  }

  onChange = (key, value, func = () => null) => {
    let newState = { ...this.state }
    newState[key] = value

    this.setState(newState, () => func())
  }
  onConfirm = ssn => {
    this.props.modifyAppointment({
      ssn,
      date       : this.state.date,
      status     : 2,
      location   : this.props.appointment_list.find(e => (e._id = ssn)).location,
      name       : this.props.appointment_list.find(e => (e._id = ssn)).name,
      speciality : this.props.appointment_list.find(e => (e._id = ssn)).speciality,
      time       : '',
    })
  }

  fileIsIncorrectFiletype = file => {
    if ([ 'application/pdf' ].indexOf(file.type) === -1) {
      return true
    } else {
      return false
    }
  }
  cancelButtonClicked = () => {
    return this.state.cancelButtonClicked
  }

  resetCancelButtonClicked = () => {
    this.setState({ cancelButtonClicked: false })
  }

  showInvalidFileTypeMessage = file => {
    window.alert('Tried to upload invalid filetype ' + file.type)
  }

  showProgressBar = () => {
    this.setState({ progressBarVisible: true })
  }

  updateProgressBar = event => {
    this.setState({
      progressPercent : event.loaded / event.total * 100,
    })
  }

  handleFileSelected = (event, file) => {
    this.setState({ file: file, fileContents: event.target.result })
  }

  render() {
    const { onChange, onConfirm } = this
    const { takein_modal, ssn, diagnosed_disease } = this.state
    const { appointment_list, removeAppointment } = this.props

    return (
      <Fragment>
        {/* Main */}
        <section className='col'>
          <div className='d-flex justify-content-between mx-5 mt-4'>
            <h6 className='text-muted'>
              Pending Appointments: {appointment_list.filter(item => item.status === 2).length}
            </h6>
          </div>
          {/* Appointments */}
          <div className='container-fluid row flex-wrap justify-content-center grid-card-last m-0'>
            {appointment_list.filter(item => item.status === 1).map(({ _id, speciality, name, location, date }) => (
              <div key={_id} className='card shadow-sm flex-fill m-1' style={{ width: '100%' }}>
                <div className='card-body row'>
                  <div className='col'>
                    {/* <figure className='figure' style={{ minWidth: '10rem', width: '10rem' }}>
                    <img src={avatar} className='figure-img img-fluid rounded' alt={name} />
                  </figure> */}
                    <h4 className='card-title mb-2'>{name}</h4>
                    <h6 className='text-muted'>Male</h6>
                    <div>
                      <small className='mb-0 text-muted'>Age</small>
                      <h6>20 years</h6>
                    </div>
                  </div>
                  <div className='col d-flex flex-column align-items-end'>
                    <div className='d-flex justify-content-end align-items-center'>
                      <span className='card-title mb-2'>{format(new Date(date), 'Do MMM, YYYY (hh:mm A)')}</span>
                      <button
                        className='btn btn-primary mb-2 ms-3'
                        onClick={() => onChange('takein_modal', true, () => onChange('ssn', _id))}
                      >
                        Take in
                      </button>
                    </div>
                    {/* <div className='text-end'>
                      <small className='mb-0 text-muted'>Age</small>
                      <h6>20 years</h6>
                    </div> */}
                  </div>
                  {/* <div className='row m-0 p-0'>
                    <div className='d-flex justify-content-end align-items-center'>
                      <button
                        className='btn btn-primary mb-2 ms-3'
                        onClick={() => onChange('takein_modal', true, () => onChange('ssn', _id))}
                      >
                        Take in
                      </button>
                    </div>
                  </div> */}
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

        {/* Takein Modal */}
        {takein_modal &&
        ssn && (
          <div className='modal' tabindex='-1'>
            <div className='backdrop' onClick={() => onChange('takein_modal', false, onChange('ssn', ''))} />
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Checkup
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => onChange('takein_modal', false, onChange('ssn', ''))}
                  />
                </div>
                <div className='modal-body m-2'>
                  <div className='ms-2'>
                    <h4>
                      {appointment_list.find(e => e._id === ssn).name}
                      <br />
                      <small className='text-muted'>Male</small>
                    </h4>
                  </div>
                  <br />
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      placeholder='Enter patient diagnosed disease'
                      id='diagnosed_disease'
                      name='diagnosed_disease'
                      style={{ height: '100%', maxHeight: '7rem' }}
                      value={diagnosed_disease}
                      onChange={e => onChange(e.target.name, e.target.value)}
                    />
                    <label htmlFor='feedback'>Enter Diagnosis Report</label>
                  </div>
                  <div className='div mt-3 p-1'>
                    <Files
                      multiple={true}
                      maxSize='25mb'
                      multiple={false}
                      accept={[ 'application/pdf' ]}
                      onSuccess={files => this.setState({ files })}
                      onError={errors => this.setState({ errors })}
                    >
                      {({ browseFiles, getDropZoneProps, getLabelProps }) => (
                        <Fragment>
                          <label {...getLabelProps()}>Upload Medical Report</label>
                          <div {...getDropZoneProps({ className: 'myDropZone' })} />
                          <button className='btn btn-dark mt-2' onClick={browseFiles}>
                            Select PDF files...
                          </button>
                          {this.state.files.map(file => (
                            <span className='ms-3 badge bg-primary' key={file.name}>
                              {file.name}
                            </span>
                          ))}
                          {this.state.errors.map(error => (
                            <span className='' key={error.file.name}>
                              {error.file.name} - {error.type}
                            </span>
                          ))}
                        </Fragment>
                      )}
                    </Files>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    className='btn btn-success'
                    onClick={() => onChange('takein_modal', false, onChange('ssn', ''))}
                  >
                    Complete Checkup
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
  modifyAppointment : payload => dispatch(appointmentAction.send.modify(payload)),
  removeAppointment : payload => dispatch(appointmentAction.send.remove(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Takein)
