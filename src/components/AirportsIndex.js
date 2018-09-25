import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AirportPage from './AirportPage'
import Categories from './Categories'
import HighTraffic from './HighTraffic'
import SearchBar from './SearchBar'
import { BrowserRouter, Route } from 'react-router-dom'
import '../App.css'

class AirportsIndex extends Component {
  render() {
    const { airports, token } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">SkyGod</h1>
            <SearchBar token={token} airports={airports} />
          </header>
          <Route path='/' exact render={(props) => <Categories airports={airports} />} />
          <Route path='/airports/:id' component={AirportPage} />
          <Route path='/high-traffic' render={(props) => <HighTraffic airports={airports} />} />
        </div>
      </BrowserRouter>
    )
  }
}

AirportsIndex.propTypes = {
  airports: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
}

export default AirportsIndex
