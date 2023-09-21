import React, { memo } from 'react'

import classes from './Box.module.css'

import box1Image from '@/public/assets/images/boxes/box1.png'
import box10Image from '@/public/assets/images/boxes/box10.png'
import box100Image from '@/public/assets/images/boxes/box100.png'
import box1000Image from '@/public/assets/images/boxes/box1000.png'
import box10000Image from '@/public/assets/images/boxes/box10000.png'
import box100000Image from '@/public/assets/images/boxes/box100000.png'

type TBox = {
  id: string
  score: EBoxScore
  isActiveBox: boolean
  onAdd?: (type: EBoxScore) => void
  onDelete?: (type: EBoxScore) => void
  clicksLeft?: number
  disabled?: boolean
}

// type TActiveBox = TBox & {
//   // readonly isActiveBox: true
//   onAdd: (type: EBoxScore) => void
//   clicksLeft: string
// }

export enum EBoxScore {
  BRONZE = '1',
  SILVER = '10',
  GOLD = '100',
  DIAMOND = '1000',
  PLATINIUM = '10000',
  LEGENDARY = '100000',
}

type TBoxProps<T> = React.PropsWithChildren & {
  box: T
}

function Box<T extends TBox>(props: TBoxProps<T>) {
  let backgroundImage
  // let backgroundColor

  switch (props.box.score) {
    case EBoxScore.BRONZE:
      backgroundImage = `url(${box1Image.src})`
      // backgroundColor = '#a05822'
      break
    case EBoxScore.SILVER:
      backgroundImage = `url(${box10Image.src})`
      // backgroundColor = '#bec7c7'
      break
    case EBoxScore.GOLD:
      backgroundImage = `url(${box100Image.src})`
      // backgroundColor = '#d6c372'
      break
    case EBoxScore.DIAMOND:
      backgroundImage = `url(${box1000Image.src})`
      // backgroundColor = '#effffe'
      break
    case EBoxScore.PLATINIUM:
      backgroundImage = `url(${box10000Image.src})`
      // backgroundColor = '#e5e4e2'
      break
    case EBoxScore.LEGENDARY:
      backgroundImage = `url(${box100000Image.src})`
      // backgroundColor = '#543242'
      break
    default:
      backgroundImage = 'unset'
      break
  }

  const boxClickHandler = () => {
    if (!props.box.isActiveBox) {
      return
    }

    if (props.box.onAdd) {
      props.box.onAdd(props.box.score)
    }

    if (props.box.onDelete) {
      props.box.onDelete(props.box.score)
    }
  }

  // PassiveBox
  if (!props.box.isActiveBox) {
    // console.log('Passive Box:', props.box.id)
    return (
      <button
        className={classes.box}
        style={{
          backgroundImage,
        }}
        id={props.box.id}
        disabled={true}
      />
    )
  }

  // ActiveBox
  // console.log('Active Box:', props.box.id)
  return (
    <button
      className={classes.box}
      style={{
        backgroundImage,
        visibility: props.box.clicksLeft === 0 ? 'hidden' : 'visible',
      }}
      onClick={boxClickHandler}
      disabled={props.box.clicksLeft === 0 ? true : undefined} // TODO: check & log conditions
      id={props.box.id}
    >
      <span>x{props.box.clicksLeft}</span>
    </button>
  )
}

export default memo(Box)
