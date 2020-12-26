import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import PatientNav from '../Nav/PatientNav'

import Search from '../Search/Search'
import Appointment from '../Appointment/Appointment'
import Review from '../Review/Review'

class Home extends Component {
  componentDidMount() {
    this.props.fetchTemp()
  }
  state = {}

  render() {
    const { temp } = this.props

    return (
      <Fragment>
        <section className='header d-flex justify-content-between align-items-center shadow-sm px-3'>
          <div className='logo'>Dr WHO</div>
          <div className='d-flex'>
            <button className='btn btn-sm btn-outline-dark mt-auto'>Logout</button>
          </div>
        </section>
        <div class='row m-0' style={{ height: 'calc(100vh - 2.6rem)' }}>
          <section className='col-2'>
            <Switch>
              <Route path='/patient/' component={PatientNav} />
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
            </Switch>
          </section>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
