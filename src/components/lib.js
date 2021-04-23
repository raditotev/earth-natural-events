import {useEffect, useState} from 'react'
import {FaSpinner} from 'react-icons/fa'

function FullPageSpinner() {
  return (
    <div className="loading">
      <FaSpinner className="spinner" />
      <h1>Loading...</h1>
    </div>
  )
}

function NoEventsInfoPopUp({show}) {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return display ? <div className="info">No events in this category</div> : null
}

export {FullPageSpinner, NoEventsInfoPopUp}
