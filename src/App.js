import React, { Component } from 'react'
import { AUTH_URL, AUTH_POST_OPTIONS } from './utils/api'
import AirportsIndex from './components/AirportsIndex'
import HighTraffic from './components/HighTraffic'
import SearchBar from './components/SearchBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  state = {
    token: null,
  }

  componentDidMount() {
    this.getToken()
  }

  getToken(attemptsCount = 0) {
    fetch(AUTH_URL, AUTH_POST_OPTIONS)
      .then(response => response.json())
      .then(json => this.setState({token: json.auth_token}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    const { token } = this.state

    if (token === null) {
      return false
    } else {
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">SkyGod</h1>
              <SearchBar token={token} />
            </header>
            <Route path='/' exact render={(props) => <AirportsIndex token={token} />} />
            <Route path='/high-traffic' component={HighTraffic} />
            <Route path='/by-iata' component={HighTraffic} />
            <Route path='/by-country' component={HighTraffic} />
            <Route path='/by-city' component={HighTraffic} />
            <Route path='/by-name' component={HighTraffic} />
          </div>
        </Router>
      )
    }
  }
}

export default App
