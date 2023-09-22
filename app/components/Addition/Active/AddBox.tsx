import React, { memo } from 'react'

import classes from './AddBox.module.css'

import { TBox, EBoxScore } from '../../UI/InGame/Box'
import { getBackgroundImage } from '@/app/_helpers/components/box'

type TAddBox = TBox & {
  onAdd: (type: EBoxScore) => void
  clicksLeft: number
  // disabled: boolean
}

type TAddBoxProps<T> = React.PropsWithChildren & {
  box: T
}

function AddBox<T extends TAddBox>(props: TAddBoxProps<T>) {
  const backgroundImage = getBackgroundImage(props.box.score)

  const boxClickHandler = () => {
    if (props.box.onAdd) {
      props.box.onAdd(props.box.score)
    }
  }

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

export default memo(AddBox)
