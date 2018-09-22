import React from 'react'
import PropTypes from 'prop-types'

const HighTraffic = ({ location }) => {
  const { airports } = location

  return (
    <div>
      HighTraffic
    </div>
  )
}

HighTraffic.propTypes = {
  location: PropTypes.object.isRequired,
}

export default HighTraffic
