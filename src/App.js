import React, { Component } from 'react'
import { AUTH_URL, AUTH_POST_OPTIONS, GET_AIRPORTS_URL, getOptions} from './utils/api'
import AirportsIndex from './components/AirportsIndex'

class App extends Component {
  state = {
    airports: [],
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

  getAirports() {
    fetch(GET_AIRPORTS_URL, getOptions(this.state.token))
      .then(response => response.json())
      .then(json => this.setState({airports: json}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    const { airports, token } = this.state

    if (token === null) {
      return false
    } else if (airports.length === 0) {
      this.getAirports()
      return false
    } else {
      return (
        <AirportsIndex airports={airports} token={token} />
      )
    }
  }
}

export default App
