import React, { memo } from 'react'

import classes from './AddBox.module.css'

import { TBox, EBoxScore } from '../../UI/InGame/Box'
import { getBackgroundImage } from '@/app/_helpers/components/box'

type TAddBox = TBox & {
  onAdd: (type: EBoxScore) => void
  clicksLeft: number
}

type TAddBoxProps<T> = React.PropsWithChildren & {
  box: T
}

function AddBox<T extends TAddBox>(props: TAddBoxProps<T>) {
  const backgroundImage = getBackgroundImage(props.box.score)
  const noClicksLeft = props.box.clicksLeft === 0

  const boxClickHandler = () => {
    if (props.box.onAdd) {
      props.box.onAdd(props.box.score)
    }
  }

  return (
    <>
      <button
        className={classes.box}
        style={{
          backgroundImage,
          visibility: noClicksLeft ? 'hidden' : 'visible',
          // opacity: noClicksLeft ? 0 : 1
          // display: noClicksLeft ? 'none' : 'inherit',
        }}
        onClick={boxClickHandler}
        disabled={noClicksLeft ? true : undefined} // TODO: check & log conditions
        id={props.box.id}
      >
        <span
          style={
            {
              // opacity: 1
            }
          }
        >
          x{props.box.clicksLeft}
        </span>
      </button>
    </>
  )
}

export default memo(AddBox)
