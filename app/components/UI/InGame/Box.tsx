import React, { useState, memo } from 'react'

import classes from './Box.module.css'

import box1Image from '@/public/assets/images/boxes/box1.png'
import box10Image from '@/public/assets/images/boxes/box10.png'
import box100Image from '@/public/assets/images/boxes/box100.png'
import box1000Image from '@/public/assets/images/boxes/box1000.png'
import box10000Image from '@/public/assets/images/boxes/box10000.png'
import box100000Image from '@/public/assets/images/boxes/box100000.png'

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

  let backgroundImage
  // let backgroundColor

  switch (props.type) {
    case EBoxType.BRONZE:
      backgroundImage = `url(${box1Image.src})`
      // backgroundColor = '#a05822'
      break
    case EBoxType.SILVER:
      backgroundImage = `url(${box10Image.src})`
      // backgroundColor = '#bec7c7'
      break
    case EBoxType.GOLD:
      backgroundImage = `url(${box100Image.src})`
      // backgroundColor = '#d6c372'
      break
    case EBoxType.DIAMOND:
      backgroundImage = `url(${box1000Image.src})`
      // backgroundColor = '#effffe'
      break
    case EBoxType.PLATINIUM:
      backgroundImage = `url(${box10000Image.src})`
      // backgroundColor = '#e5e4e2'
      break
    // TODO: 100000
    default:
      backgroundImage = 'unset'
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
      style={{ backgroundImage }}
      onClick={boxClickHandler}
      disabled={clicksLeft === 0 ? true : undefined} // TODO: check & log conditions
      id={props.id}
    />
  )
}

export default memo(Box)
