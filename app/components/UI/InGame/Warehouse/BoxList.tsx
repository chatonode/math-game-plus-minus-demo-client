'use client'

import { useState, memo } from 'react'

import classes from './BoxList.module.css'

import BoxColumn from './BoxColumn'

import { EBoxScore } from '../Box'

type TBoxListProps = React.PropsWithChildren & {
  boxColumns: number[][]
}

const BoxList = (props: TBoxListProps) => {
  // const [isReadyToCarryOne, setIsReadyToCarryOne] = useState<boolean>(false)

  return (
    <div className={classes['warehouse-container']}>
      {/* [[9], [1], [8], [7]] */}
      {props.boxColumns.map((columnArray, numberOfDigits) => {
        const boxScore = Math.pow(10, numberOfDigits).toString() as EBoxScore
        const numberOfBoxes = columnArray[0]

        // setIsReadyToCarryOne((prevIsReadyToCarryOne) => {
        //   console.log('numberOfBoxes:', numberOfBoxes)
        //   console.log('prevIsReadyToCarryOne:', prevIsReadyToCarryOne)
        //   if (numberOfBoxes === 0 && prevIsReadyToCarryOne === true) {
        //     return false
        //   }

        //   if (numberOfBoxes === 9 && prevIsReadyToCarryOne === false) {
        //     return true
        //   }

        //   // else
        //   return prevIsReadyToCarryOne
        // })

        return (
          <div
            key={`column-${numberOfDigits + 1}-${boxScore}`}
            //@ts-ignore
            // boxno={numberOfBoxes}
          >
            <BoxColumn
              // key={`column-${numberOfDigits + 1}-${boxScore}`}
              id={`column-${numberOfDigits + 1}-${boxScore}`}
              boxList={columnArray}
              boxScore={boxScore}
              numberOfBoxes={numberOfBoxes}
            />
          </div>
        )
      })}
    </div>
  )
}

export default memo(BoxList)
