import React from 'react'

import PropTypes from 'prop-types'

import './efren.css'

const Efren = (props) => {
  return (
    <div className="efren-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Efren.defaultProps = {
  text: 'Text',
}

Efren.propTypes = {
  text: PropTypes.string,
}

export default Efren
