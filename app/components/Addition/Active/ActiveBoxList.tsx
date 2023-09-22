import React from 'react'

import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
import { EBoxScore } from '../../UI/InGame/Box'
import AddBox from './AddBox'

import restartButton from '@/public/assets/images/Restart_Btn.png'

import classes from './ActiveBoxList.module.css'

type TActiveBoxList = React.PropsWithChildren & {
  initialRemaining: number
  currentRemaining: number
  onAdd: (type: EBoxScore) => void
  onReset: () => void
  disabled: boolean
}

const ActiveBoxList = (props: TActiveBoxList) => {
  const generatedList = convertFromNumTo1DBoxDigits(
    // For 100 >> 219 - (7919 - 7819) = 119
    props.currentRemaining,
    props.initialRemaining
  )

  const generatedActiveBoxList = generatedList.map(
    (numberValueAsString, boxDigit) => {
      const numberValue = parseInt(numberValueAsString)
      const boxValue = Math.pow(10, boxDigit)
      const boxType = boxValue.toString() as EBoxScore

      // Edge Case: One Less Column
      //   if (boxValue > props.question.params.number_to_operate) {
      //     return // Early
      //   }

      return (
        <div
          key={`${numberValue}-${boxType}`}
          className={
            boxDigit <= 2 ? classes['first-row'] : classes['second-row']
          }
        >
          <AddBox
            box={{
              id: `${numberValue}-${boxType}`,
              score: boxType,

              onAdd: props.onAdd,
              clicksLeft: numberValue,
            }}
          />
        </div>
      )
    }
  )

  return (
    <div className={classes.top}>
      <div className={classes.reset}>
        <button style={{
          backgroundImage: `url(${restartButton.src})`
        }} onClick={props.onReset} ></button>
      </div>
      <div className={classes['active-boxes']}>{generatedActiveBoxList}</div>
    </div>
  )
}

export default ActiveBoxList
