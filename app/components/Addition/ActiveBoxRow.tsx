// import { convertFromNumTo1DBoxDigits } from '@/app/_helpers/BoxHelper'
// import classes from './ActiveBoxRow.module.css'
// import Box, { EBoxScore } from '../UI/InGame/Box'

// const ActiveBoxRow = () => {
//   const generatedList = convertFromNumTo1DBoxDigits(
//     // For 100 >> 219 - (7919 - 7819) = 119
//     props.currentRemaining,
//     props.initialRemaining
//   )

//   const generatedActiveBoxList = generatedList.map(
//     (numberValueAsString, boxDigit) => {
//       const numberValue = parseInt(numberValueAsString)
//       const boxValue = Math.pow(10, boxDigit)
//       const boxType = boxValue.toString() as EBoxScore

//       // Edge Case: One Less Column
//       //   if (boxValue > props.question.params.number_to_operate) {
//       //     return // Early
//       //   }

//       const boxAtFirstRow = boxDigit <= 2

//       return (
//         <div
//           className={
//             boxAtFirstRow ? classes['first-row'] : classes['second-row']
//           }
//           key={boxAtFirstRow ? classes['first-row'] : classes['second-row']}
//         >
//           <Box
//             key={`${numberValue}-${boxType}`}
//             box={{
//               id: `${numberValue}-${boxType}`,
//               score: boxType,
//               isActiveBox: true,
//               onAdd: props.onAdd,
//               clicksLeft: numberValue,
//             }}
//           />
//         </div>
//       )
//     }
//   )

//   return (
//     <div
//       className={boxAtFirstRow ? classes['first-row'] : classes['second-row']}
//       key={boxAtFirstRow ? classes['first-row'] : classes['second-row']}
//     ></div>
//   )
// }

// export default ActiveBoxRow
