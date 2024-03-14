import React from 'react'

import { Helmet } from 'react-helmet'

import Component2 from '../components/component2'
import TestComponent from '../components/test-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Group Supervisor</title>
        <meta property="og:title" content="Direct Group Supervisor" />
      </Helmet>
      <Component2></Component2>
      <TestComponent>
        <div className="home-container1">
          <h1>Heading</h1>
        </div>
      </TestComponent>
    </div>
  )
}

export default Home
