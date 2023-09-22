import React, { memo } from 'react'

import classes from './RemoveBox.module.css'

import { TBox, EBoxScore } from '../../UI/InGame/Box'
import { getBackgroundImage } from '@/app/_helpers/components/box'

type TRemoveBox = TBox & {
  onRemove: (type: EBoxScore) => void
  clicksCount: number
  clicksMax: number
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

  console.log(
    'Remove Box clicksLeft:',
    props.box.id,
    ' - ',
    props.box.clicksCount,
    '  - max: ',
    props.box.clicksMax
  )
  return (
    <button
      className={classes.box}
      style={{
        backgroundImage,
        // visibility:
        //   props.box.clicksCount === 0 ? 'hidden' : 'visible',
        // https://sookocheff.com/post/javascript/the-javascript-click-event-and-hidden-input-elements/
        MozOpacity: props.box.clicksCount === 0 ? 0 : 'inherit',
        opacity: props.box.clicksCount === 0 ? 0 : 'inherit',
      }}
      onClick={boxClickHandler} // TODO
      disabled={
        props.box.clicksCount === props.box.clicksMax ? true : undefined
      } // TODO: check & log conditions
      id={props.box.id}
    >
      <span
        onClick={(e) => e.preventDefault()}
        style={{
          MozOpacity: '1',
          opacity: '1',
        }}
      >
        x{props.box.clicksCount}
      </span>
    </button>
  )
}

export default memo(RemoveBox)
