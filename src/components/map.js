import {Fragment, useEffect} from 'react'
import {useAsync} from 'utils/hooks'
import {Event} from './event'
import {FullPageSpinner, NoEventsInfoPopUp} from './lib'
import GoogleMapReact from 'google-map-react'
import {categoryIcons} from 'utils/category-icons'
const fetch = require('node-fetch')

function Map({category}) {
  const {
    isLoading,
    data: {events},
    run,
  } = useAsync({data: []})

  useEffect(() => {
    if (!category) {
      return
    }
    run(
      fetch(
        `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${category}`,
      ).then(res => res.json()),
    )
  }, [category, run])

  function renderEvent(point, event, index) {
    const [lng, lat] = point
    return (
      <Event
        key={event.id + index}
        lat={lat}
        lng={lng}
        description={event.title}
        children={categoryIcons[category]}
      />
    )
  }

  return (
    <Fragment>
      {isLoading && <FullPageSpinner />}
      {events?.length === 0 && <NoEventsInfoPopUp />}
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={{
          lat: 45,
          lng: 0,
        }}
        defaultZoom={1}
      >
        {events
          ?.map((event, index) => {
            if (
              event.geometries.length > 1 ||
              Array.isArray(event.geometries[0].coordinates[0])
            ) {
              const coordinates =
                event.geometries.length > 1
                  ? event.geometries.map(geometry => geometry.coordinates)
                  : event.geometries[0].coordinates[0]
              return coordinates.map((point, index) => {
                return isLoading ? null : renderEvent(point, event, index)
              })
            }
            const point = event.geometries[0].coordinates
            return isLoading ? null : renderEvent(point, event, index)
          })
          .flat()}
      </GoogleMapReact>
    </Fragment>
  )
}

export {Map}
