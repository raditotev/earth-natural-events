import {Map} from 'components/map'
import {Header} from 'components/header'
import {Fragment, useState} from 'react'

function App() {
  const [category, setCategory] = useState(null)

  return (
    <Fragment>
      <Header category={category} setCategory={setCategory} />
      <Map category={category} />
    </Fragment>
  )
}

export default App
