import React from 'react'

import Box, { EBoxType } from './Box'

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

type TBoxesProps = React.PropsWithChildren & {
  numberOfBoxesList: number[][]
}

const Boxes = (props: TBoxesProps) => {
  return (
    <div>
      {props.numberOfBoxesList.map((columnArray, numberOfDigits) => {
        const boxComponents = columnArray.map((numberOfBoxesInColumn) => {
          // Calculate Box value
          const valueOfBox = Math.pow(10, numberOfDigits)
          const typeOfBox = valueOfBox.toString() as EBoxType // Logical Type Transformation

          // Loop N Times
          // @ref-link: https://bobbyhadz.com/blog/react-create-number-of-elements
          const newArrayForColumn = Array.from(
            { length: numberOfBoxesInColumn },
            (_, index) => {
              // Generate unique key
              const numberValue = index + 1
              const boxKey = numberValue * valueOfBox

              return <Box key={boxKey} type={typeOfBox} />
            }
          )

          return newArrayForColumn
        })

        return boxComponents
      })}
    </div>
  )
}

export default Boxes
