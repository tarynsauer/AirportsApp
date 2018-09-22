import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class CategoryDescription extends Component {
  render() {
    const { airports, list, title, url } = this.props

    return (
      <div>
        <Link to={{ pathname: url, airports: airports }}>See all</Link>
        <h2>{title}</h2>
        {list.map(label => <div key={label}>{label}</div>)}
      </div>
    )
  }
}

CategoryDescription.propTypes = {
  airports: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CategoryDescription
