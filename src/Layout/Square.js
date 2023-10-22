import React from 'react'
import PropTypes from 'prop-types'

function Square(props) {
  const className = `square ${props.value} ${props.value ? 'used' : ''}`
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Square
