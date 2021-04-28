/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx, keyframes} from '@emotion/react'

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

export {FullPageSpinner}
