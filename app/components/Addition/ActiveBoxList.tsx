import React from 'react'

import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
import Box, { EBoxType } from '../UI/InGame/Box'

import classes from './ActiveBoxList.module.css'

type TActiveBoxList = React.PropsWithChildren & {
  initialRemaining: number
  currentRemaining: number
  onAdd: (type: EBoxType) => void
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
      const boxType = boxValue.toString() as EBoxType

      // console.log('numberValueAsString:', numberValueAsString)
      // console.log('boxTypeAsString', boxType)

      // Edge Case: One Less Column
      //   if (boxValue > props.question.params.number_to_operate) {
      //     return // Early
      //   }

      return (
        <Box
          key={`${numberValueAsString}-${boxType}`}
          id={`${numberValueAsString}-${boxType}`}
          type={boxType}
          onAdd={props.onAdd.bind(null, boxType)}
          disabled={props.disabled ? undefined : true}
          clicksLeft={numberValueAsString}
        />
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
