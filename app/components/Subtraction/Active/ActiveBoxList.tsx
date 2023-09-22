import React from 'react'

import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
import RemoveBox from './RemoveBox'
import { TBox, EBoxScore } from '../../UI/InGame/Box'

import classes from './ActiveBoxList.module.css'

type TActiveBoxList = React.PropsWithChildren & {
  initialRemaining: number
  currentRemaining: number
  onRemove: (type: EBoxScore) => void
  onReset: () => void
  disabled: boolean
}

const ActiveBoxList = (props: TActiveBoxList) => {
  // Non-updated
  // const generatedList = convertFromNumTo1DBoxDigits(
  //   // For 100 >> 219 - (7919 - 7819) = 119
  //   props.currentRemaining,
  //   props.initialRemaining
  // )

  const generatedMaxList = convertFromNumTo1DBoxDigits(
    // For 100 >> 219 - (7919 - 7819) = 119
    props.currentRemaining,
    props.initialRemaining
  )

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

      console.log('Inside ActiveBoxList:')
      console.log(props.initialRemaining, props.currentRemaining)
      console.log('numberValue', numberValue)

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
              clicksMax: parseInt(generatedMaxList[boxDigit]),
            }}
          />
        </div>
      )
    }
  )

  return (
    <div className={classes.top}>
      <div className={classes.reset}>
        <button onClick={props.onReset}>Başa Dön</button>
      </div>
      <div className={classes['active-boxes']}>{generatedActiveBoxList}</div>
    </div>
  )
}

export default ActiveBoxList
