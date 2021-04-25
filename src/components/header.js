import {useEffect} from 'react'
import {useAsync} from 'utils/hooks'

function Header({category, setCategory}) {
  const {
    data: {categories},
    run,
  } = useAsync({data: {categories: []}})

  useEffect(() => {
    run(
      fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories').then(res =>
        res.json(),
      ),
    )
  }, [run])

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  return (
    <header>
      <h1>
        Earth Natural Events
        <span>
          Powered by <strong>NASA</strong>
        </span>
      </h1>
      <select
        name="categories"
        aria-label="Select natural event"
        onChange={handleCategoryChange}
      >
        <option value="">Select event type</option>
        {categories?.map(category => {
          const {id, title} = category
          return (
            <option key={id} value={id}>
              {title}
            </option>
          )
        })}
      </select>
    </header>
  )
}

export {Header}
