import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HighTraffic = ({ airports }) => {
  return (
    <div>
      <h2>High Traffic Airports</h2>
      {airports.map(airport => {
        return <Link key={airport.id} to={{pathname: `/airports/${airport.id}`, state: { airport: airport }}}>{airport.name}</Link>
      })}
    </div>
  )
}

HighTraffic.propTypes = {
  airports: PropTypes.array.isRequired,
}

export default HighTraffic
