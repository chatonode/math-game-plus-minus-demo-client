import React, { memo } from 'react'

import classes from './RemoveBox.module.css'

import { TBox, EBoxScore } from '../../UI/InGame/Box'
import { getBackgroundImage } from '@/app/_helpers/components/box'

type TRemoveBox = TBox & {
  onRemove: (type: EBoxScore) => void
  clicksCount: number
  readonly clicksMax: 10
  // disabled: boolean
}

type TRemoveBoxProps<T> = React.PropsWithChildren & {
  box: T
}

function RemoveBox<T extends TRemoveBox>(props: TRemoveBoxProps<T>) {
  const backgroundImage = getBackgroundImage(props.box.score)

  const boxClickHandler = () => {
    if (props.box.onRemove) {
      props.box.onRemove(props.box.score)
    }
  }

  console.log('Remove Box clicksLeft:', props.box.id, ' - ', props.box.clicksCount)
  return (
    <button
      className={classes.box}
      style={{
        backgroundImage,
        visibility: props.box.clicksCount === 0 ? 'hidden' : 'visible',
      }}
      onClick={boxClickHandler}
      // disabled={props.box.clicksLeft === 0 ? true : undefined} // TODO: check & log conditions
      id={props.box.id}
    >
      <span>x{props.box.clicksCount}</span>
    </button>
  )
}

export default memo(RemoveBox)
