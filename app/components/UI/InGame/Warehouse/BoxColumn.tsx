import React from 'react'

import Box, { EBoxScore } from '../Box'
import classes from './BoxColumn.module.css'

import columnImage from '@/public/assets/images/ColumnImage.png'

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
                  // isActiveBox: false,
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
