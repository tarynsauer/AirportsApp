import React, { Component } from 'react'
import { GET_BUSINESSES_URL, getOptions } from '../utils/api'
import AirportMap from './AirportMap'

class AirportPage extends Component {
  state = {
    businesses: [],
    getComplete: false,
  }

  getBusinesses() {
    const { airport, token } = this.props.location.state

    fetch(`${GET_BUSINESSES_URL}?id=${airport.id}`, getOptions(token))
      .then(response => response.json())
      .then(json => this.setState({businesses: json, getComplete: true}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    const { airport } = this.props.location.state
    const { businesses, getComplete } = this.state

    if (getComplete) {
    return (
      <div>
        <h2>{airport.name} - {airport.iata}</h2>
        <p>{airport.description}</p>
        <h3>Local businesses</h3>
        {businesses.map(b => {
          return <div key={b.id}>{b.name}</div>
        })}
        <AirportMap
          isMarkerShown={true}
          lat={parseFloat(airport.latitude)}
          lng={parseFloat(airport.longitude)}
        />
      </div>
    )
    } else {
      this.getBusinesses()
      return false
    }
  }
}


export default AirportPage
