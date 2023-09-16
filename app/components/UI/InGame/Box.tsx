import React from 'react'

import classes from './Box.module.css'

export enum EBoxType {
  BRONZE = '1',
  SILVER = '10',
  GOLD = '100',
  DIAMOND = '1000',
  PLATINIUM = '10000',
  INFINITE = 'infinite',
}

// enum

type TBoxProps = React.PropsWithChildren & {
  id?: string
  onAdd?: (id: string, type: EBoxType) => void
  type: EBoxType
}

const Box = (props: TBoxProps) => {
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

  return (
    <div
      className={classes.box}
      style={{ backgroundColor }}
      onClick={
        props.onAdd
          ? props.onAdd.bind(null, props.id as string, props.type)
          : undefined
      }
    >
      <span>{props.type.toString()}</span>
    </div>
  )
}

export default Box
