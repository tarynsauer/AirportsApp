import React, { Component } from 'react'

class AirportPage extends Component {
  render() {
    const { airport } = this.props.location.state

    return (
      <div>
        {airport.name}
      </div>
    )
  }
}


export default AirportPage
