import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GET_AIRPORTS_URL } from '../utils/api'
import Categories from './Categories'

class AirportsIndex extends Component {
  state = {
    airports: [],
  }

  getAirports() {
    fetch(GET_AIRPORTS_URL, {
      method: 'GET',
      mode: 'cors',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'}
    }).then(response => response.json())
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
