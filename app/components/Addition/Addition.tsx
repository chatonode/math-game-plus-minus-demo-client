'use client'

import { useReducer, useCallback, useEffect } from 'react'

import AdditionBoxes from './AdditionBoxes'
import Box from '../UI/InGame/Box'

import classes from './Addition.module.css'

import {
  convertFromNumToBoxDigits,
  convertFromBoxDigitsToNum,
  convertFromNumToActiveBoxDigits,
  getClicksLeft,
} from '@/app/_helpers/BoxHelper'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

import { EBoxType } from '../UI/InGame/Box'

type TAdditionState = {
  first_part: {
    current_box_status: number[][]
    current_total: number
    finished: boolean
  }
}

enum EAdditionActionType {
  UPDATE = 'update',
  SUCCESS = 'success',
  FAILURE = 'failure',
  RESET = 'reset',
}

type TAdditionUpdateActionPayload = {
  selected_box_type: EBoxType
}

type TAdditionResetActionPayload = {
  initial_box_status: number[][]
}

type TAdditionAction =
  | { type: EAdditionActionType.UPDATE; payload: TAdditionUpdateActionPayload }
  | { type: EAdditionActionType.SUCCESS }
  | { type: EAdditionActionType.FAILURE }
  | { type: EAdditionActionType.RESET; payload: TAdditionResetActionPayload }

const additionReducer = (
  prevAdditionState: TAdditionState,
  action: TAdditionAction
): TAdditionState => {
  switch (action.type) {
    case EAdditionActionType.UPDATE:
      // const incomingValue = Math.pow(10, parseInt(action.payload.selected_box_type) -1)

      const incomingValue = parseInt(action.payload.selected_box_type)

      const currentTotalValue =
        prevAdditionState.first_part.current_total + incomingValue

      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
          current_box_status: convertFromNumToBoxDigits(currentTotalValue),
          current_total: currentTotalValue,
        },
      }
    case EAdditionActionType.RESET:
      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
          current_box_status: action.payload.initial_box_status,
          current_total: convertFromBoxDigitsToNum(
            action.payload.initial_box_status
          ),
        },
      }
    case EAdditionActionType.SUCCESS:
      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
          finished: true,
        },
      }
    // TODO: Failure Case
    // case EAdditionActionType.FAILURE:
    //   return {
    //     ...prevAdditionState,
    //     first_part: {
    //       ...prevAdditionState.first_part,
    //       finished: true,
    //     },
    //   }
    default:
      return {
        ...prevAdditionState,
      }
  }
}

type TAdditionProps = React.PropsWithChildren & {
  question: TQuestionData
}

const Addition = (props: TAdditionProps) => {
  const initialBoxStatus = convertFromNumToBoxDigits(
    props.question.params.first_number
  )

  const [state, dispatch] = useReducer(additionReducer, {
    first_part: {
      current_box_status: initialBoxStatus,
      current_total: props.question.params.first_number,
      finished: false,
    },
  })

  const totalChangeHandler = (event: React.ChangeEvent) => {}

  const resetQuestionHandler = useCallback(() => {
    dispatch({
      type: EAdditionActionType.RESET,
      payload: { initial_box_status: initialBoxStatus },
    })
  }, [])

  const addBoxHandler = (type: EBoxType) => {
    dispatch({
      type: EAdditionActionType.UPDATE,
      payload: {
        selected_box_type: type,
      },
    })
  }

  useEffect(() => {
    const expected = props.question.params.expected_result
    const actual = state.first_part.current_total
    if (actual === expected) {
      dispatch({
        type: EAdditionActionType.SUCCESS,
      })
    }

    if (actual > expected) {
      dispatch({
        type: EAdditionActionType.FAILURE,
      })
    }
  }, [state.first_part.current_total])

  state.first_part.current_box_status

  // TODOOOO
  const ActiveBoxList = convertFromNumToActiveBoxDigits(
    props.question.params.number_to_operate
  ).map((numberValue, boxDigit) => {
    const boxValue = Math.pow(10, boxDigit)
    const boxType = boxValue.toString() as EBoxType
    const boxClicksLeft = getClicksLeft(state.first_part.current_total, boxDigit)

    // Edge Case: One Less Column
    if (boxValue > props.question.params.number_to_operate) {
      return // Early
    }

    return (
      <Box
        key={numberValue * boxValue}
        id={(numberValue * boxValue).toString()}
        type={boxType}
        onAdd={addBoxHandler}
        disabled={state.first_part.finished === true ? true : undefined}
        clicksLeft={boxClicksLeft}
      />
    )
  })

  return (
    <>
      <main className="container">
        <div className={`${classes.bar} ${classes.leftbar}`}>
          <h2>Mevcut Durum</h2>
          <AdditionBoxes boxColumns={state.first_part.current_box_status} />
        </div>

        <div className={`${classes.bar} ${classes.rightbar}`}>
          <div>
            <h3>Yeni Gelenler</h3>
            <div>{ActiveBoxList}</div>
            <div>
              <button onClick={resetQuestionHandler}>Başa Dön</button>
            </div>
          </div>

          <div>
            {!state.first_part.finished && <p>{props.question.first_part}</p>}
            {state.first_part.finished && <p>{props.question.second_part}</p>}
          </div>

          <div>
            <h3>İşlem</h3>
            <label>{props.question.params.first_number}</label>
            <label>+</label>
            <label>{props.question.params.number_to_operate}</label>
            <label>=</label>
            <input onChange={totalChangeHandler} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Addition
