import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const navBar = ({ navigations = [] }) => {
  return (
    <Fragment>
      <div className='py-4'>
        <div className='nav'>
          {navigations.map(({ link, name, icon }) => (
            <NavLink
              key={link}
              className='nav-btn d-flex align-items-center btn my-1'
              style={{ width: 'min-content' }}
              to={link}
              activeClassName='active'
            >
              <i className='material-icons me-2'>{icon}</i>
              <h6 className='nav-btn-text m-0'>{name}</h6>
            </NavLink>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default navBar
