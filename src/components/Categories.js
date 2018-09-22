import React from 'react'
import CategoryDescription from './CategoryDescription'
import PropTypes from 'prop-types'
import { onlyUnique, randomize, sortBy } from '../utils/helpers'

const Categories = ({ airports }) => {
  const highTraffic = sortBy(airports.filter(a => a['total_flights'] > 5000000), 'total_flights')

  return (
    <div>
      <CategoryDescription
        airports={airports}
        list={randomize(highTraffic.slice(0, 10).map(a => a.name))}
        title='Highest Traffic Airports'
        url='/high-traffic'
      />
      <CategoryDescription
        airports={airports}
        list={randomize(highTraffic.map(a => a.iata))}
        title='Airports by IATA Code'
        url='/by-iata'
      />
      <CategoryDescription
        airports={airports}
        list={randomize(highTraffic.map(a => a.country).filter(onlyUnique))}
        title='Airports by Country'
        url='/by-country'
      />
      <CategoryDescription
        airports={airports}
        list={randomize(highTraffic.map(a => a.city).filter(onlyUnique))}
        title='Airports by City'
        url='/by-city'
      />
      <CategoryDescription
        airports={airports}
        list={randomize(highTraffic.map(a => a.name))}
        title='Airports by Name'
        url='/by-name'
      />
    </div>
  )
}

Categories.propTypes = {
  airports: PropTypes.array.isRequired,
}

export default Categories
