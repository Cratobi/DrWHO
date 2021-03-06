import React, { Fragment } from 'react'

import NavBar from '../../component/module/navBar/navBar'

function PatientNav() {
  return (
    <Fragment>
      <NavBar
        navigations={[
          { link: '/patient/search', name: 'Search', icon: 'person_search' },
          { link: '/patient/appointments', name: 'Appointments', icon: 'today' },
          { link: '/patient/reviews', name: 'Medical History', icon: 'medical_services' },
        ]}
      />
    </Fragment>
  )
}

export default PatientNav
