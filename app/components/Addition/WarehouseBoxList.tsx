import classes from './WarehouseBoxList.module.css'

import BoxColumn from '../UI/InGame/BoxColumn'

import { EBoxScore } from '../UI/InGame/Box'

type TWarehouseBoxListProps = React.PropsWithChildren & {
  boxColumns: number[][]
}

const WarehouseBoxList = (props: TWarehouseBoxListProps) => {
  
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

export default WarehouseBoxList
