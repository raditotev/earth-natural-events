import {useEffect} from 'react'
import {useAsync} from 'utils/hooks'
import {Event} from './event'
import {FullPageSpinner} from './lib'
import GoogleMapReact from 'google-map-react'
import {FaGripfire} from 'react-icons/fa'
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
    <GoogleMapReact
      bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
      defaultCenter={{
        lat: -33.10204,
        lng: -71.49142,
      }}
      defaultZoom={5}
    >
      {events?.map(event => {
        const [lng, lat] = event.geometries[0].coordinates
        return <Event key={lat} lat={lat} lng={lng} children={<FaGripfire />} />
      })}
    </GoogleMapReact>
  )
}

export {Map}
