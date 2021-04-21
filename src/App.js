import {Map} from 'components/map'

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
      <Map />
  )
}

export default App
