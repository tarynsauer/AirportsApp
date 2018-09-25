import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AirportPage from './AirportPage'
import Categories from './Categories'
import HighTraffic from './HighTraffic'
import NotFound from './NotFound'
import SearchBar from './SearchBar'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import '../App.css'

class AirportsIndex extends Component {
  render() {
    const { airports, token } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to='/'>
              <h1 className="App-title">SkyGod</h1>
            </Link>
            <SearchBar token={token} airports={airports} />
          </header>
          <Switch>
            <Route path='/' exact render={(props) => <Categories airports={airports} token={token} />} />
            <Route path='/airports/:id' component={AirportPage} />
            <Route path='/high-traffic' render={(props) => <HighTraffic airports={airports} token={token} />} />
            <Route component={NotFound} />
          </Switch>
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
