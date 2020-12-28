import React, { Fragment, useState, useEffect } from 'react'

const Password = ({ label, type: peek = true, icon, onChange, value = '' }) => {
  const [ type, setType ] = useState('password')

  // useEffect(() => setIsEmpty(value === ''), [ value ])
  const togglePeek = () => (type === 'password' ? setType('text') : setType('password'))

  const optClass = []

  if (icon) optClass.push('input-icon')
  if (peek) optClass.push('input-peek')

  return (
    <Fragment>
      <label className='lebel-input'>
        <div className='txt'>{label}</div>
        {icon && <i className='material-icons icon'>{icon}</i>}
        <input
          type={type}
          className={`input ${optClass.join(' ')}`}
          placeholder='i.e. Whatever'
          onChange={({ target }) => onChange(target.value)}
          value={value}
        />
        {peek && (
          <i className='material-icons peek' onClick={() => togglePeek()}>
            {type == 'password' ? 'visibility' : 'visibility_off'}
          </i>
        )}
      </label>
    </Fragment>
  )
}

export default Password
