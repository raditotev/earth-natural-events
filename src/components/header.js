/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'

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
    <header
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        z-index: 10;
      `}
    >
      <h1
        css={css`
          color: #fff;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;
          font-size: 40px;
          font-weight: 900;
          margin: 15px;
        `}
      >
        Earth Natural Events
        <span
          css={css`
            position: relative;
            left: -130px;
            top: 10px;
            color: darkblue;
            font-size: 23px;
            font-weight: 700;
          `}
        >
          Powered by{' '}
          <strong
            css={css`
              color: red;
              font-weight: 900;
            `}
          >
            NASA
          </strong>
        </span>
      </h1>
      <select
        name="categories"
        aria-label="Select natural event"
        onChange={handleCategoryChange}
        css={css`
          border-radius: 5px;
          background-color: #fff;
          padding: 10px;
          &:focus {
            outline: none;
          }
        `}
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
