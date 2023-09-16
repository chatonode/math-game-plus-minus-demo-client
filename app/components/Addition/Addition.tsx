'use client'

import { useReducer, useCallback, useEffect } from 'react'

import Box from '../UI/InGame/Box'
import Boxes from '../UI/InGame/Boxes'

import {
  convertFromNumToBoxDigits,
  convertFromBoxDigitsToNum,
  convertFromNumToActiveBoxDigits,
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

    if (actual >= expected) {
      dispatch({
        type: EAdditionActionType.FAILURE,
      })
    }
  }, [state.first_part.current_total])

  const activeBoxes = convertFromNumToActiveBoxDigits(
    props.question.params.number_to_operate
  ).map((numberValue, boxDigit) => {
    // console.log(numberValue, boxDigit)
    console.log(state.first_part.current_total)
    console.log(props.question.params.expected_result)

    return (
      <Box
        key={numberValue * boxDigit}
        id={(numberValue * boxDigit).toString()}
        type={Math.pow(10, boxDigit).toString() as EBoxType}
        onAdd={addBoxHandler}
        disabled={state.first_part.finished}
      />
    )
  })

  return (
    <>
      <main>
        <div>
          <h3>İşlem</h3>
          <label>{props.question.params.first_number}</label>
          <label>+</label>
          <label>{props.question.params.number_to_operate}</label>
          <label>=</label>
          <input onChange={totalChangeHandler} />
        </div>
        <div>
          <h3>Yeni Gelenler</h3>
          {/* TODO: Generate Active Boxes */}
          <div>{activeBoxes}</div>
          <div>
            <button onClick={resetQuestionHandler}>Başa Dön</button>
          </div>
        </div>
        <div>
          <h3>Mevcut Durum</h3>
          <Boxes numberOfBoxesList={state.first_part.current_box_status} />
        </div>
        <div>
          {!state.first_part.finished && <p>{props.question.first_part}</p>}
          {state.first_part.finished && <p>{props.question.second_part}</p>}
        </div>
      </main>
    </>
  )
}

export default Addition
