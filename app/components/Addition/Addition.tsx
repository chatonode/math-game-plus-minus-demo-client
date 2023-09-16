'use client'

import { useReducer, useCallback } from 'react'

import Box from '../UI/InGame/Box'
import Boxes from '../UI/InGame/Boxes'

import {
  convertFromNumToBoxDigits,
  convertFromBoxDigitsToNum,
} from '@/app/_helpers/BoxHelper'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

type TAdditionState = {
  first_part: {
    current_box_status: number[][]
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
  selected_box_id: string
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
  // TODO: Switch Case
  switch (action.type) {
    case EAdditionActionType.UPDATE:
      return {
        ...prevAdditionState,
      }
    case EAdditionActionType.RESET:
      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
          current_box_status: action.payload.initial_box_status,
        },
      }
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
          {/* <div>{props.question.params.expected_result.toString()}</div> */}
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
