import React, { Fragment, useState, useEffect } from 'react'

const Input = ({ label, type: icon, onChange, value = '' }) => {
  const optClass = []

  if (icon) optClass.push('input-icon')

  return (
    <Fragment>
      <label className='lebel-input'>
        <div className='txt'>{label}</div>
        {icon && <i className='material-icons icon'>{icon}</i>}
        <input
          type='text'
          className={`input ${optClass.join(' ')}`}
          placeholder='i.e. Whatever'
          // onChange={({ target }) => onChange(target.value)}
          // value={value}
        />
      </label>
    </Fragment>
  )
}

export default Input
