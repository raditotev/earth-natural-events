/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'

import {useEffect} from 'react'
import {client} from 'utils/api-client'
import {useAsync} from 'utils/hooks'
import {FullPageSpinner} from './lib'

const EVENTS_ENDPOINT = 'events/geojson'

function getCategories(events) {
  return [...new Set(events.map(feat => feat.properties.categories[0].title))]
}

function Header({setEvents}) {
  const {
    isLoading,
    data: {features: events},
    run,
  } = useAsync({data: {features: []}})

  useEffect(() => {
    run(client(EVENTS_ENDPOINT))
  }, [run])

  function handleCategoryChange(e) {
    const category = e.target.value
    setEvents(
      events.filter(event => event.properties.categories[0].title === category),
    )
  }

  const mq = '@media (max-width: 600px)'

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
        ${mq} {
          flex-direction: column;
          justify-content: center;
        }
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
          ${mq} {
            font-size: 25px;
          }
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
            ${mq} {
              display: block;
              position: static;
              font-size: 15px;
              font-weight: 500;
            }
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
      {isLoading ? (
        <FullPageSpinner />
      ) : (
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
            ${mq} {
              margin-top: 10px;
            }
          `}
        >
          <option value="">Select event type</option>
          {getCategories(events).map(category => {
            return (
              <option
                key={category.toLowerCase().split(' ').join('-')}
                value={category}
              >
                {category}
              </option>
            )
          })}
        </select>
      )}
    </header>
  )
}

export {Header}
