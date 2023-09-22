import React, { memo } from 'react'

import classes from './Box.module.css'
import { getBackgroundImage } from '@/app/_helpers/components/box'

export type TBox = {
  id: string
  score: EBoxScore
  // isActiveBox: boolean
  // onAdd?: (type: EBoxScore) => void
  // onRemove?: (type: EBoxScore) => void
  // clicksLeft?: number
  // disabled?: boolean
}

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
  const backgroundImage = getBackgroundImage(props.box.score)

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

export default memo(Box)
