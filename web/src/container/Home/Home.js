import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { tempAction } from '../../store/actions'

import Search from '../Search/Search'
import Appointment from '../Appointment/Appointment'

import NavBar from '../../component/module/navBar/navBar'

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
            <NavBar
              navigations={[
                { link: '/search', name: 'Search', icon: 'person_search' },
                { link: '/appointments', name: 'Appointments', icon: 'today' },
                { link: '/reviews', name: 'Reviews', icon: 'rate_review' },
              ]}
            />
            {/* <Switch>
            <Route path='/temp' component={temp} key={0} />
          </Switch> */}
          </section>
          <section className='col row m-0 scrollable-y'>
            <Switch>
              <Route path='/search' component={Search} />
              <Route path='/appointments' component={Appointment} />
              <Route path='/reviews' component={Appointment} />
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
