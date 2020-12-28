import React, { Fragment } from 'react'

import NavBar from '../../component/module/navBar/navBar'

function DoctorNav() {
  return (
    <Fragment>
      <NavBar
        navigations={[
          { link: '/doctor/appointments', name: 'Appointments', icon: 'today' },
          { link: '/doctor/reviews', name: 'Reviews', icon: 'rate_review' },
        ]}
      />
    </Fragment>
  )
}

export default DoctorNav
