import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'
import { GET_AUTOCOMPLETE_URL, getOptions } from '../utils/api'
import { Redirect } from 'react-router-dom'

class SearchBar extends Component {
  state = {
    selectedValue: null,
    suggestedValues: [],
    value: '',
  }

  getSuggestions(query) {
    fetch(`${GET_AUTOCOMPLETE_URL}?q=${query}`, getOptions(this.props.token))
      .then(response => response.json())
      .then(json => this.setState({suggestedValues: json.suggestions}))
      .catch(error => console.error('Error:', error))
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({value: value})
    this.getSuggestions(value)
  }

  handleSelect(value) {
    this.setState({value: value})
    const airport = this.props.airports.filter(a => a.name === value)[0]
    this.setState({selectedValue: airport})
  }

  render() {
    const { selectedValue, suggestedValues } = this.state

    if (selectedValue !== null) {
      return <Redirect to={{ pathname: `/airports/${selectedValue.id}`, state: { airport: selectedValue } }} />
    }

    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={suggestedValues}
          renderItem={(item, isHighlighted) =>
              <div key={item.id} style={{ background: isHighlighted ? 'white' : 'black' }}>
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
  airports: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
}

export default SearchBar
