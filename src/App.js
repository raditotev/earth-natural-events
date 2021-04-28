import {Map} from 'components/map'
import {Header} from 'components/header'
import {Fragment, useState} from 'react'

function App() {
  const [events, setEvents] = useState([])

  return (
    <Fragment>
      <Header setEvents={setEvents} />
      <Map events={events} />
    </Fragment>
  )
}

export default App
