import React from 'react'

import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
import Box, { EBoxScore } from '../UI/InGame/Box'

import classes from './ActiveBoxList.module.css'

type TActiveBoxList = React.PropsWithChildren & {
  initialRemaining: number
  currentRemaining: number
  onAdd: (type: EBoxScore) => void
  onReset: () => void
  disabled: boolean
}

const ActiveBoxList = (props: TActiveBoxList) => {
  // const addBoxHandler = () => {
  //   props.onAdd()
  // }

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

      // console.log('numberValueAsString:', numberValueAsString)
      // console.log('boxTypeAsString', boxType)

      // Edge Case: One Less Column
      //   if (boxValue > props.question.params.number_to_operate) {
      //     return // Early
      //   }

      return (
        <Box
          key={`${numberValue}-${boxType}`}
          box={{
            id: `${numberValue}-${boxType}`,
            score: boxType,
            isActiveBox: true,
            onAdd: props.onAdd,
            clicksLeft: numberValue,
          }}
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