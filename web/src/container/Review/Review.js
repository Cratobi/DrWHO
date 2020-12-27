import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'
import { format } from 'fecha'

class Review extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {
    appointment : [
      {
        _id        : '5fd7b897a0fbf5cf07d7980b',
        speciality : 'consectetur',
        name       : 'Noel Mathews',
        location   : '<SyntaxError: Unexpected identifier>, Florida',
        date       : 'Fri Apr 14 1989 06:05:21 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971573e5018cbabacc',
        speciality : 'ipsum',
        name       : 'Burke Rich',
        location   : '<SyntaxError: Unexpected identifier>, New Mexico',
        date       : 'Sun Jan 19 1986 19:10:47 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8976b83ce0fd0b50bcb',
        speciality : 'sit',
        name       : 'Cathy Sutton',
        location   : '<SyntaxError: Unexpected identifier>, Texas',
        date       : 'Sat Nov 30 1974 00:36:20 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897183d4f0d352feeb5',
        speciality : 'dolor',
        name       : 'Kelley Vasquez',
        location   : '<SyntaxError: Unexpected identifier>, Arizona',
        date       : 'Sun Oct 04 1970 06:17:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fca6c327bf67897f',
        speciality : 'dolor',
        name       : 'Valerie Mccall',
        location   : '<SyntaxError: Unexpected identifier>, Ohio',
        date       : 'Mon Mar 09 1992 00:06:58 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971c85fb205a878fd3',
        speciality : 'officia',
        name       : 'Dickson Hendricks',
        location   : '<SyntaxError: Unexpected identifier>, Oregon',
        date       : 'Thu Dec 03 1970 06:01:29 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897ccb2f90b46ff2da2',
        speciality : 'consectetur',
        name       : 'Rocha Bolton',
        location   : '<SyntaxError: Unexpected identifier>, New York',
        date       : 'Fri Feb 02 2001 19:02:40 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971e18953e0d6c5caa',
        speciality : 'non',
        name       : 'Candy Rollins',
        location   : '<SyntaxError: Unexpected identifier>, Tennessee',
        date       : 'Mon Oct 09 1989 08:44:12 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f418effc4852689b',
        speciality : 'proident',
        name       : 'Emilia Mckee',
        location   : '<SyntaxError: Unexpected identifier>, Kentucky',
        date       : 'Wed Nov 09 2016 12:31:39 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897ed9292bc8d11477b',
        speciality : 'dolor',
        name       : 'Howe Tyler',
        location   : '<SyntaxError: Unexpected identifier>, Federated States Of Micronesia',
        date       : 'Fri May 03 2019 15:36:44 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f9798c8ec054a5b0',
        speciality : 'laboris',
        name       : 'Goodman Jacobs',
        location   : '<SyntaxError: Unexpected identifier>, Missouri',
        date       : 'Mon Nov 23 1992 10:05:13 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897b2fab3d6e5537f4f',
        speciality : 'nostrud',
        name       : 'Juliette Mejia',
        location   : '<SyntaxError: Unexpected identifier>, Connecticut',
        date       : 'Tue May 13 1975 18:04:18 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8971bbf22ddc36857ee',
        speciality : 'tempor',
        name       : 'Hudson Carney',
        location   : '<SyntaxError: Unexpected identifier>, North Carolina',
        date       : 'Thu Sep 21 1978 17:05:03 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89778b5498002e451c8',
        speciality : 'enim',
        name       : 'Mcfadden Porter',
        location   : '<SyntaxError: Unexpected identifier>, South Carolina',
        date       : 'Mon Feb 10 1986 05:02:15 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8977ebc8c4ba1675b91',
        speciality : 'sint',
        name       : 'Kitty Holman',
        location   : '<SyntaxError: Unexpected identifier>, Oklahoma',
        date       : 'Sun Nov 16 1986 14:16:27 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897101c04c7828de849',
        speciality : 'ex',
        name       : 'Tate Mullins',
        location   : '<SyntaxError: Unexpected identifier>, Idaho',
        date       : 'Sun Dec 02 1984 18:11:11 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e4a00edc1c9600f6',
        speciality : 'nisi',
        name       : 'Wynn Fox',
        location   : '<SyntaxError: Unexpected identifier>, Alaska',
        date       : 'Sat May 13 2006 14:06:33 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f983bd6284dd9ca8',
        speciality : 'sunt',
        name       : 'Cummings Hughes',
        location   : '<SyntaxError: Unexpected identifier>, Illinois',
        date       : 'Thu Oct 17 1991 21:07:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fe51a91477443308',
        speciality : 'et',
        name       : 'Ortega Watts',
        location   : '<SyntaxError: Unexpected identifier>, Delaware',
        date       : 'Sun Apr 05 2009 10:32:59 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e7d9439fb083270f',
        speciality : 'aliqua',
        name       : 'Berger Cameron',
        location   : '<SyntaxError: Unexpected identifier>, Palau',
        date       : 'Sat Oct 02 1993 17:58:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89742366cf96e8a0b00',
        speciality : 'culpa',
        name       : 'Francesca Harding',
        location   : '<SyntaxError: Unexpected identifier>, Guam',
        date       : 'Tue Jul 01 2014 00:44:43 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89759c64612c863546d',
        speciality : 'ad',
        name       : 'Woods Sykes',
        location   : '<SyntaxError: Unexpected identifier>, Puerto Rico',
        date       : 'Wed Feb 17 1999 06:30:33 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89741065436fd00e4be',
        speciality : 'consequat',
        name       : 'Long Ferguson',
        location   : '<SyntaxError: Unexpected identifier>, Virginia',
        date       : 'Wed Dec 15 2004 15:39:51 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897414c79b351b1f186',
        speciality : 'sunt',
        name       : 'Louise Patrick',
        location   : '<SyntaxError: Unexpected identifier>, Nebraska',
        date       : 'Sat May 16 1981 10:09:06 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89764ac47338193962a',
        speciality : 'ut',
        name       : 'Trudy Bonner',
        location   : '<SyntaxError: Unexpected identifier>, Nevada',
        date       : 'Sat Jul 13 2019 17:37:21 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897f74cbf81efc107c6',
        speciality : 'quis',
        name       : 'Williams Maldonado',
        location   : '<SyntaxError: Unexpected identifier>, Maryland',
        date       : 'Tue Jul 20 2010 00:15:38 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89702215af0c0cd45d4',
        speciality : 'id',
        name       : 'Avery Norton',
        location   : '<SyntaxError: Unexpected identifier>, District Of Columbia',
        date       : 'Wed Oct 04 2006 01:04:18 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8970d70a534e316e169',
        speciality : 'quis',
        name       : 'Gonzalez Barrera',
        location   : '<SyntaxError: Unexpected identifier>, Wisconsin',
        date       : 'Tue Sep 28 1999 22:38:46 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897b7608e1e1cf67051',
        speciality : 'in',
        name       : 'Wilson Jensen',
        location   : '<SyntaxError: Unexpected identifier>, Virgin Islands',
        date       : 'Fri May 30 2014 15:12:26 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897fc2c86bd23694add',
        speciality : 'dolore',
        name       : 'Lilly Mcclain',
        location   : '<SyntaxError: Unexpected identifier>, Colorado',
        date       : 'Sat Oct 22 2016 09:17:58 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897e20044dca5291169',
        speciality : 'laborum',
        name       : 'Christian Alvarez',
        location   : '<SyntaxError: Unexpected identifier>, Utah',
        date       : 'Sun Jul 06 1980 15:06:45 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b89719794b87129acbe9',
        speciality : 'sit',
        name       : 'Bauer Christensen',
        location   : '<SyntaxError: Unexpected identifier>, New Hampshire',
        date       : 'Mon Jul 11 2016 08:21:00 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b897c538387222608675',
        speciality : 'ipsum',
        name       : 'Le Brewer',
        location   : '<SyntaxError: Unexpected identifier>, Northern Mariana Islands',
        date       : 'Sat Apr 16 2005 01:58:48 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
      {
        _id        : '5fd7b8977ff8f66ad9bcc6b3',
        speciality : 'ipsum',
        name       : 'Michele Benson',
        location   : '<SyntaxError: Unexpected identifier>, Louisiana',
        date       : 'Fri Jan 31 1986 02:38:55 GMT+0600 (Bangladesh Standard Time)',
        time       : '',
      },
    ],
    modal       : false,
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
                            <div className='d-flex justify-content-between px-1'>
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                            </div>
                            <input type='range' className='form-range' min='1' max='5' step='1' id='visiting-fee' />
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
                <div className='modal-footer'>
                  {/* <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save changes
                </button> */}
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
  temp : state.temp,
})
const mapDispatchToProps = dispatch => ({
  fetchTemp : payload => dispatch(tempAction.send.fetch(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
