import {useState} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {Map} from 'components/map'
import {Header} from 'components/header'
import {FullPageErrorFallback} from 'components/lib'

function App() {
  const [events, setEvents] = useState([])

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <Header setEvents={setEvents} />
      <Map events={events} />
    </ErrorBoundary>
  )
}

export default App
