import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Checkbox = ({ label, icon, onChange, value = false }) => {
  const handleChange = () => {
    onChange(!value)
  }

  return (
    <div>
      <label className='lebel-checkbox'>
        <input
          className='checkbox'
          type='checkbox'
          //  onChange={handleChange}
          // checked={value}
        />
        <div className='custombox' />
        {icon && <i className='material-icons icon'>{icon}</i>}
        <div className='txt'>{label}</div>
      </label>
    </div>
  )
}

export default Checkbox
