import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'

class SearchBar extends Component {
  state = {
    value: '',
    suggestedValues: [],
  }

  handleChange(e) {
    this.setState({value: e.target.value})
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
