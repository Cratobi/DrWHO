import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import {} from '../../store/actions'

import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import PatientNav from '../Nav/PatientNav'
import DoctorNav from '../Nav/DoctorNav'
import AdminNav from '../Nav/AdminNav'

import Search from '../Search/Search'
import Appointment from '../Appointment/Appointment'
import AppointmentDoctor from '../Appointment/AppointmentDoctor'
import Takein from '../Takein/Takein'
import Review from '../Review/Review'
import ReviewDoctor from '../Review/ReviewDoctor'

class Home extends Component {
  componentDidMount() {}
  state = {}

  render() {
    const { temp } = this.props

    return (
      <Fragment>
        <Route path='/:subpath(patient|doctor|admin)'>
          <section className='header d-flex justify-content-between align-items-center shadow-sm px-3'>
            <div className='logo'>Dr WHO</div>
            <div className='d-flex'>
              <Link to='/login'>
                <button className='btn btn-sm btn-outline-dark mt-auto'>Logout</button>
              </Link>
            </div>
          </section>
        </Route>
        <Route path='/:subpath(registration)'>
          <section className='header d-flex justify-content-between align-items-center shadow-sm px-3'>
            <div className='logo'>Dr WHO</div>
            <div className='d-flex'>
              <Link to='/login'>
                <button className='btn btn-sm btn-outline-dark mt-auto'>Login</button>
              </Link>
            </div>
          </section>
        </Route>
        <Route path='/:subpath(login|)'>
          <section className='header d-flex justify-content-between align-items-center shadow-sm px-3'>
            <div className='logo'>Dr WHO</div>
            <div className='d-flex'>
              <Link to='/registration'>
                <button className='btn btn-sm btn-outline-dark mt-auto'>Registration</button>
              </Link>
            </div>
          </section>
        </Route>

        <div className='row m-0' style={{ height: 'calc(100vh - 2.6rem)' }}>
          <section className='col-2'>
            <Switch>
              <Route path='/patient/' component={PatientNav} />
              <Route path='/doctor/' component={DoctorNav} />
              <Route path='/admin/' component={AdminNav} />
            </Switch>
            {/* <Switch>
            <Route path='/temp' component={temp} key={0} />
          </Switch> */}
          </section>
          <section className='col row m-0 scrollable-y'>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/login' exact component={Login} />
              <Route path='/registration' exact component={Registration} />
              <Route path='/patient/' exact component={Search} />
              <Route path='/patient/search' exact component={Search} />
              <Route path='/patient/appointments' exact component={Appointment} />
              <Route path='/patient/reviews' exact component={Review} />
              <Route path='/doctor/appointments' exact component={AppointmentDoctor} />
              <Route path='/doctor/takein' exact component={Takein} />
              <Route path='/doctor/feedback' exact component={ReviewDoctor} />
            </Switch>
          </section>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
