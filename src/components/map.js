import {useEffect} from 'react'
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

  if (isLoading) {
    return <FullPageSpinner />
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
        {events?.map(event => {
          const [lng, lat] = event.geometries[0].coordinates
          return isLoading ? null : (
            <Event
              key={event.id}
              lat={lat}
              lng={lng}
              description={event.title}
              children={categoryIcons[category]}
            />
          )
        })}
      </GoogleMapReact>
    </Fragment>
  )
}

export {Map}
