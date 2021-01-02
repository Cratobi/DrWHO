import React, { Fragment } from 'react'

import NavBar from '../../component/module/navBar/navBar'

function DoctorNav() {
  return (
    <Fragment>
      <NavBar
        navigations={[
          { link: '/doctor/appointments', name: 'Appointments', icon: 'today' },
          // { link: '/doctor/takein', name: 'Take in', icon: 'assignment_ind' },
          { link: '/doctor/feedback', name: 'Feedbacks', icon: 'insert_comment' },
        ]}
      />
    </Fragment>
  )
}

export default DoctorNav
