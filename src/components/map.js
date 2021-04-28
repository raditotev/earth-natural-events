import {Fragment} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Event} from './event'
import GoogleMapReact from 'google-map-react'
import {categoryIcons} from 'utils/category-icons'

function Map({events}) {
  function renderEvent(point, event, category) {
    const [lng, lat] = point
    return (
      <Event
        key={uuidv4()}
        lat={lat}
        lng={lng}
        description={event.properties.title}
        children={categoryIcons[category]}
      />
    )
  }

  return (
    <Fragment>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={{
          lat: 45,
          lng: 0,
        }}
        defaultZoom={1}
      >
        {events.map((event, index) => {
          const category = event.properties.categories[0].id
          if (Array.isArray(event.geometry.coordinates[0])) {
            return event.geometry.coordinates.map(point => {
              return Array.isArray(point[0])
                ? point.map(point => renderEvent(point, event, category))
                : renderEvent(point, event, category)
            })
          } else {
            const point = event.geometry.coordinates
            return renderEvent(point, event, category)
          }
        })}
      </GoogleMapReact>
    </Fragment>
  )
}

export {Map}
