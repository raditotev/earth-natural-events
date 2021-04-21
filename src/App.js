import {useEffect} from 'react'
import {useAsync} from 'utils/hooks'
import GoogleMapReact from 'google-map-react'
import {FaGripfire} from 'react-icons/fa'
import {FaSpinner} from 'react-icons/fa'

const fetch = require('node-fetch')
const FireIcon = props => <FaGripfire className="icon" />
function FullPageSpinner() {
  return (
    <div className="loading">
      <FaSpinner className="spinner" />
      <h1>Loading...</h1>
    </div>
  )
}

function App() {
  const {
    isLoading,
    data: {events},
    run,
  } = useAsync({data: []})

  useEffect(() => {
    run(
      fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8').then(res =>
        res.json(),
      ),
    )
  }, [run])

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
        return <FireIcon key={lat} lat={lat} lng={lng} />
      })}
    </GoogleMapReact>
  )
}

export default App
