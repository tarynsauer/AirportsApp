import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input />
      </div>
    )
  }
}

SearchBar.propTypes = {
  token: PropTypes.string.isRequired,
}

export default SearchBar
