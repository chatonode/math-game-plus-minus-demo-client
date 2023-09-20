import React from 'react'

import Box, { EBoxScore } from './Box'
import classes from './BoxColumn.module.css'

import columnImage from '@/public/assets/images/ColumnImage.png'

// const generatEBoxScore = (boxDigit: string): EBoxScore => {
//   switch (boxDigit) {
//     case EBoxScore.BRONZE:
//       return EBoxScore.BRONZE
//     case EBoxScore.SILVER:
//       return EBoxScore.SILVER
//     case EBoxScore.GOLD:
//       return EBoxScore.GOLD
//     case EBoxScore.DIAMOND:
//       return EBoxScore.DIAMOND
//     case EBoxScore.PLATINIUM:
//       return EBoxScore.PLATINIUM
//     default:
//       return EBoxScore.INFINITE
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
  boxScore: EBoxScore
  id: string
}

const BoxColumn = (props: TBoxColumnProps) => {
  return (
    <div
      className={classes['column-container']}
      style={{
        backgroundImage: `url(${columnImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {props.boxList.map((numberOfBoxesInColumn) => {
        // Calculate Box Score
        const scoreOfBox = parseInt(props.boxScore) // 1, 10, 100, ...

        // Loop N Times
        // @ref-link: https://bobbyhadz.com/blog/react-create-number-of-elements
        const BoxList = Array.from(
          { length: numberOfBoxesInColumn },
          (_, index) => {
            // Generate unique key
            const numberValue = index + 1
            const boxKey = numberValue * scoreOfBox

            return (
              <Box
                key={boxKey}
                box={{
                  id: `${props.id}-${boxKey}`,
                  score: props.boxScore,
                  isActiveBox: false,
                }}
              />
            )
          }
        )
        return BoxList
      })}
    </div>
  )
}

export default BoxColumn
