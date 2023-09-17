import classes from './AdditionBoxes.module.css'

import BoxColumn from '../UI/InGame/BoxColumn'

import { EBoxType } from '../UI/InGame/Box'

type TAdditionBoxesProps = React.PropsWithChildren & {
  boxColumns: number[][]
}

const AdditionBoxes = (props: TAdditionBoxesProps) => {
  return (
    <div className={classes['warehouse-container']}>
      {/* [[9], [1], [8], [8]] */}
      {props.boxColumns.map((columnArray, numberOfDigits) => {
        return (
          <BoxColumn
            key={`column-${numberOfDigits + 1}`}
            boxList={columnArray}
            boxType={Math.pow(10, numberOfDigits).toString() as EBoxType}
          />
        )
      })}
    </div>
  )
}

export default AdditionBoxes
