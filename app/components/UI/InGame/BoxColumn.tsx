import React from 'react'

import Box, { EBoxType } from './Box'
import classes from './BoxColumn.module.css'

// const generateBoxType = (boxDigit: string): EBoxType => {
//   switch (boxDigit) {
//     case EBoxType.BRONZE:
//       return EBoxType.BRONZE
//     case EBoxType.SILVER:
//       return EBoxType.SILVER
//     case EBoxType.GOLD:
//       return EBoxType.GOLD
//     case EBoxType.DIAMOND:
//       return EBoxType.DIAMOND
//     case EBoxType.PLATINIUM:
//       return EBoxType.PLATINIUM
//     default:
//       return EBoxType.INFINITE
//   }
// }

// const getBoxComponents = (columnsWithTimes: number[][]) => {
//   const newBoxes: (typeof Box)[][] = []
//   columnsWithTimes.forEach((digitColumn: number[], index: number) => {
//     while (index !== columnsWithTimes.length) {
//       // 1-Digit
//       if (index === columnsWithTimes.length - 1) {
//         newBoxes.push(getNumberOfBox(digitColumn[index]))
//       }

//       // 2-Digits
//       if (index === columnsWithTimes.length - 2) {
//         newBoxes.push(getNumberOfBox(digitColumn[index]))
//       }

//       // 3-Digits
//       if (index === columnsWithTimes.length - 3) {
//         newBoxes.push(getNumberOfBox(digitColumn[index]))
//       }

//       // 4-Digits
//       if (index === columnsWithTimes.length - 4) {
//         newBoxes.push(getNumberOfBox(digitColumn[index]))
//       }

//       // 5-Digits
//       if (index === columnsWithTimes.length - 5) {
//         newBoxes.push(getNumberOfBox(digitColumn[index]))
//       }
//     }
//   })
//   return newBoxes
// }

// const getNumberOfBox = (numberOfBoxesInColumn: number) => {
//   const arrayWithBoxObjects = []
//   for (let i = 0; i < numberOfBoxesInColumn; i++) {
//     arrayWithBoxObjects.push(Box)
//   }

//   return arrayWithBoxObjects
// }

type TBoxColumnProps = React.PropsWithChildren & {
  boxList: number[]
  boxType: EBoxType
}

const BoxColumn = (props: TBoxColumnProps) => {
  return (
    <div className={classes['column-container']}>
      {props.boxList.map((numberOfBoxesInColumn) => {
        // Calculate Box value
        const valueOfBox = parseInt(props.boxType) // 1, 10, 100, ...

        // Loop N Times
        // @ref-link: https://bobbyhadz.com/blog/react-create-number-of-elements
        const BoxList = Array.from(
          { length: numberOfBoxesInColumn },
          (_, index) => {
            // Generate unique key
            const numberValue = index + 1
            const boxKey = numberValue * valueOfBox

            return <Box key={boxKey} type={props.boxType} />
          }
        )
        return BoxList
      })}
    </div>
  )
}

export default BoxColumn
