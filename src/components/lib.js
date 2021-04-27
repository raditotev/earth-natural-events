/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/react'

import {useEffect, useState} from 'react'
import {FaSpinner} from 'react-icons/fa'

function FullPageSpinner() {
  const spin = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'},
  })

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 5;
      `}
    >
      <FaSpinner
        css={css`
          width: 150px;
          height: 150px;
          animation: ${spin} 1s linear infinite;
        `}
      />
      <h1
        css={css`
          margin-top: 15px;
          text-align: center;
        `}
      >
        Loading...
      </h1>
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

  return display ? (
    <div
      css={css`
        width: 300px;
        height: 100px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -150px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 25px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 10px;
        z-index: 20;
      `}
    >
      No events in this category
    </div>
  ) : null
}

export {FullPageSpinner, NoEventsInfoPopUp}
