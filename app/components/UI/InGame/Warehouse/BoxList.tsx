import classes from './BoxList.module.css'

import BoxColumn from './BoxColumn'

import { EBoxScore } from '../Box'

type TBoxListProps = React.PropsWithChildren & {
  boxColumns: number[][]
}

const BoxList = (props: TBoxListProps) => {
  
  return (
    <div className={classes['warehouse-container']}>
      {/* [[9], [1], [8], [7]] */}
      {props.boxColumns.map((columnArray, numberOfDigits) => {
        const boxScore = Math.pow(10, numberOfDigits).toString() as EBoxScore

        return (
          <BoxColumn
            key={`column-${numberOfDigits + 1}-${boxScore}`}
            id={`column-${numberOfDigits + 1}-${boxScore}`}
            boxList={columnArray}
            boxScore={boxScore}
          />
        )
      })}
    </div>
  )
}

export default BoxList
