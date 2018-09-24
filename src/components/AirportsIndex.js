import React, { Component } from 'react'
import Categories from './Categories'
import PropTypes from 'prop-types'
import { GET_AIRPORTS_URL, getOptions } from '../utils/api'

class AirportsIndex extends Component {
  state = {
    airports: [],
  }

  getAirports() {
    fetch(GET_AIRPORTS_URL, getOptions(this.props.token))
      .then(response => response.json())
      .then(json => this.setState({airports: json}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    const { airports } = this.state

    if (airports.length === 0) {
      this.getAirports()
      return false
    } else {
      return (
        <Categories airports={airports} />
      )
    }
  }
}

AirportsIndex.propTypes = {
  token: PropTypes.string.isRequired,
}

export default AirportsIndex
