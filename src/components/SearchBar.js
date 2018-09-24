import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'
import { GET_AUTOCOMPLETE_URL } from '../utils/api'

class SearchBar extends Component {
  state = {
    value: '',
    suggestedValues: [],
  }

  getSuggestions(query) {
    fetch(`${GET_AUTOCOMPLETE_URL}?q=${query}`, {
      method: 'GET',
      mode: 'cors',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'}
    }).then(response => response.json())
      .then(json => this.setState({suggestedValues: json.suggestions}))
      .catch(error => console.error('Error:', error))
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({value: value})
    this.getSuggestions(value)
    //Get new suggestedValues from API
  }

  handleSelect(value) {
    this.setState({value: value})
    //Navigate to the airport's show page
  }

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.state.suggestedValues}
          renderItem={(item, isHighlighted) =>
              <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
          }
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onSelect={this.handleSelect.bind(this)}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  token: PropTypes.string.isRequired,
}

export default SearchBar
