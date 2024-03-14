import React from 'react'

import PropTypes from 'prop-types'

import './test-component.css'

const TestComponent = (props) => {
  return (
    <div className="test-component-container">
      {props.children}
      <h1>{props.heading}</h1>
      <button type="button" className="test-component-button button">
        {props.button}
      </button>
      <h1 className="test-component-text">{props.heading1}</h1>
    </div>
  )
}

TestComponent.defaultProps = {
  heading: 'Heading',
  heading1: 'Heading',
  button: 'Button',
}

TestComponent.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  button: PropTypes.string,
}

export default TestComponent
