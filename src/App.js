import React, { Component } from 'react'
import { AUTH_URL, AUTH_POST_OPTIONS } from './utils/api'
import AirportsIndex from './components/AirportsIndex'
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
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">SkyGod</h1>
          </header>
          <AirportsIndex token={token} />
        </div>
      )
    }
  }
}

export default App
