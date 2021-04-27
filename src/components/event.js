/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'

function Event({description, children}) {
  return (
    <div
      css={css`
        font-size: 30px;
        color: crimson;
        > div {
          display: none;
        }
        &:hover {
          > div {
            display: block;
            position: absolute;
            min-width: 200px;
            top: -70px;
            color: #fff;
            font-size: 18px;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 5px;
            border: 1px solid black;
            border-radius: 5px;
            z-index: 10;
          }
        }
        }
      `}
    >
      <div>{description}</div>
      {children}
    </div>
  )
}

export {Event}
