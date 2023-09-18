import React, { useState, memo } from 'react'

import classes from './Box.module.css'

export enum EBoxType {
  BRONZE = '1',
  SILVER = '10',
  GOLD = '100',
  DIAMOND = '1000',
  PLATINIUM = '10000',
  INFINITE = 'infinite',
}

type TBoxProps = React.PropsWithChildren & {
  type: EBoxType
  onAdd?: (type: EBoxType) => void
  id?: string
  disabled?: boolean
  clicksLeft?: string
}

const Box = (props: TBoxProps) => {
  // const [clicksLeft, setClicksLeft] = useState<number>(props.clicksLeft || 0)
  const clicksLeft = props.clicksLeft ? parseInt(props.clicksLeft) : 0

  let backgroundColor: string

  switch (props.type) {
    case EBoxType.BRONZE:
      backgroundColor = '#a05822'
      break
    case EBoxType.SILVER:
      backgroundColor = '#bec7c7'
      break
    case EBoxType.GOLD:
      backgroundColor = '#d6c372'
      break
    case EBoxType.DIAMOND:
      backgroundColor = '#effffe'
      break
    case EBoxType.PLATINIUM:
      backgroundColor = '#e5e4e2'
      break
    default:
      backgroundColor = 'none'
      break
  }

  // console.log('IDBOX', props.id)

  const boxClickHandler = () => {
    if (props.onAdd) {
      // setClicksLeft((prevClickState) => {
      //   if (prevClickState === 0) {
      //     // early
      //     return prevClickState
      //   }
      //   return prevClickState--
      // })

      props.onAdd(props.type)
    }

    // console.log('WTF', props.clicksLeft)
  }

  return (
    <button
      className={classes.box}
      style={{ backgroundColor }}
      onClick={boxClickHandler}
      disabled={clicksLeft === 0 ? true : undefined} // TODO: check & log conditions
      id={props.id}
    >
      <span>{props.type.toString()}</span>
    </button>
  )
}

export default memo(Box)
