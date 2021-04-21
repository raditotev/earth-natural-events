import {FaSpinner} from 'react-icons/fa'

function FullPageSpinner() {
  return (
    <div className="loading">
      <FaSpinner className="spinner" />
      <h1>Loading...</h1>
    </div>
  )
}

export {FullPageSpinner}
