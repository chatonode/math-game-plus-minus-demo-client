import React from 'react'

import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
import RemoveBox from './RemoveBox'
import { EBoxScore } from '../../UI/InGame/Box'
import ResetButton from '../../UI/InGame/ResetButton'

import classes from './ActiveBoxList.module.css'

type TActiveBoxList = React.PropsWithChildren & {
  initialRemaining: number
  currentRemaining: number
  onRemove: (type: EBoxScore) => void
  onReset: () => void
  disabled: boolean
}

const ActiveBoxList = (props: TActiveBoxList) => {

  const generatedCountList = convertFromNumTo1DBoxDigits(
    // For 100 >> 219 - (7919 - 7819) = 119
    props.initialRemaining - props.currentRemaining,
    props.initialRemaining
  )

  const generatedActiveBoxList = generatedCountList.map(
    (numberValueAsString, boxDigit) => {
      const numberValue = parseInt(numberValueAsString)
      const boxValue = Math.pow(10, boxDigit)
      const boxType = boxValue.toString() as EBoxScore

      // Edge Case: One Less Column
      //   if (boxValue > props.question.params.number_to_operate) {
      //     return // Early
      //   }

      // console.log('Inside ActiveBoxList:')
      // console.log(props.initialRemaining, props.currentRemaining)
      // console.log('numberValue', numberValue)

      return (
        <div
          key={`${numberValue}-${boxType}`}
          className={
            boxDigit <= 2 ? classes['first-row'] : classes['second-row']
          }
        >
          <RemoveBox
            box={{
              id: `${numberValue}-${boxType}`,
              score: boxType,
              onRemove: props.onRemove,
              clicksCount: numberValue,
              // clicksMax: 10,
              clicksMax: parseInt(Array.from(props.initialRemaining.toString()).reverse()[boxDigit]),
            }}
          />
        </div>
      )
    }
  )

  return (
    <div className={classes.top}>
      <ResetButton onReset={props.onReset} />
      <div className={classes['active-boxes']}>{generatedActiveBoxList}</div>
    </div>
  )
}

export default ActiveBoxList
