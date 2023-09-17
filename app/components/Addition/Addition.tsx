'use client'

import { useReducer, useCallback, useEffect } from 'react'

import AdditionBoxes from './AdditionBoxes'
import Box from '../UI/InGame/Box'

import classes from './Addition.module.css'

import {
  convertFromNumTo2DBoxDigits,
  convertFromNumTo1DBoxDigits,
  convertFrom1DBoxDigitsToNum,
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
  second_part: {
    current_total: number
    finished: boolean
  }
}

enum EAdditionActionType {
  UPDATE = 'update',
  SUCCESS = 'success',
  FAILURE = 'failure',
  RESET = 'reset',
  CHANGE_INPUT = 'change-input',
  COMPLETE = 'complete',
}

type TAdditionUpdateActionPayload = {
  selected_box_type: EBoxType
}

type TAdditionResetActionPayload = {
  initial_box_status: number[][]
}

type TAdditionChangeInputActionPayload = {
  entered_input: number
}

type TAdditionAction =
  | { type: EAdditionActionType.UPDATE; payload: TAdditionUpdateActionPayload }
  | { type: EAdditionActionType.SUCCESS }
  | { type: EAdditionActionType.FAILURE }
  | { type: EAdditionActionType.RESET; payload: TAdditionResetActionPayload }
  | {
      type: EAdditionActionType.CHANGE_INPUT
      payload: TAdditionChangeInputActionPayload
    }
  | { type: EAdditionActionType.COMPLETE }

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
          current_box_status: convertFromNumTo2DBoxDigits(currentTotalValue),
          current_total: currentTotalValue,
        },
      }
    case EAdditionActionType.RESET:
      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
          current_box_status: action.payload.initial_box_status,
          current_total: convertFrom1DBoxDigitsToNum(
            action.payload.initial_box_status
          ),
          finished: false,
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

    case EAdditionActionType.CHANGE_INPUT:
      return {
        ...prevAdditionState,
        ...prevAdditionState.first_part,
        second_part: {
          current_total: action.payload.entered_input,
          finished: false,
        },
      }

    case EAdditionActionType.COMPLETE:
      return {
        ...prevAdditionState,
        ...prevAdditionState.first_part,
        second_part: {
          ...prevAdditionState.second_part,
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
  const initialBoxStatus = convertFromNumTo2DBoxDigits(
    props.question.params.first_number
  )

  const [state, dispatch] = useReducer(additionReducer, {
    first_part: {
      current_box_status: initialBoxStatus,
      current_total: props.question.params.first_number,
      finished: false,
    },
    second_part: {
      current_total: 0,
      finished: false,
    },
  })

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

  const totalChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const totalInputValue = parseInt(event.target.value.trim())

    dispatch({
      type: EAdditionActionType.CHANGE_INPUT,
      payload: {
        entered_input: totalInputValue,
      },
    })
  }

  const totalInputSubmitHandler = () => {
    if (
      state.second_part.current_total === props.question.params.expected_result
    ) {
      dispatch({
        type: EAdditionActionType.COMPLETE,
      })
    }
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

  console.log('SELAM component', props.question.params.expected_result)

  // TODOOOO
  const ActiveBoxList = convertFromNumTo1DBoxDigits(
    // For 100 >> 219 - (7919 - 7819) = 119
    props.question.params.expected_result - state.first_part.current_total,
    props.question.params.number_to_operate
  ).map((numberValueAsString, boxDigit) => {
    const numberValue = parseInt(numberValueAsString)
    const boxValue = Math.pow(10, boxDigit)
    const boxType = boxValue.toString() as EBoxType

    console.log('numberValueAsString:', numberValueAsString)
    console.log('boxTypeAsString', boxType)

    // Edge Case: One Less Column
    if (boxValue > props.question.params.number_to_operate) {
      return // Early
    }

    return (
      <Box
        key={`${numberValueAsString}-${boxType}`}
        id={`${numberValueAsString}-${boxType}`}
        type={boxType}
        onAdd={addBoxHandler}
        disabled={state.first_part.finished === true ? true : undefined}
        clicksLeft={numberValueAsString}
      />
    )
  })

  return (
    <>
      <main className="container">
        <div
          className={`${classes.bar} ${classes.leftbar}${
            state.first_part.finished ? ' ' + classes.locked : ''
          }`}
        >
          <h2>Mevcut Durum</h2>
          <AdditionBoxes boxColumns={state.first_part.current_box_status} />
        </div>

        <div
          className={`${classes.bar} ${classes.rightbar}${
            state.second_part.finished ? ' ' + classes.locked : ''
          }`}
        >
          <div>
            <h3>Yeni Gelenler</h3>
            <div>{ActiveBoxList}</div>
            <div>
              <button onClick={resetQuestionHandler}>Başa Dön</button>
            </div>
          </div>

          <div>
            {!state.second_part.finished && !state.first_part.finished && (
              <p>{props.question.first_part}</p>
            )}
            {!state.second_part.finished && state.first_part.finished && (
              <p>{props.question.second_part}</p>
            )}
            {state.second_part.finished && (
              <p>{props.question.success_message}</p>
            )}
          </div>

          <div>
            <h3>İşlem</h3>
            <label>{props.question.params.first_number}</label>
            <label>+</label>
            <label>{props.question.params.number_to_operate}</label>
            <label>=</label>
            <input
              type="number"
              value={
                state.second_part.current_total === 0
                  ? ''
                  : state.second_part.current_total
              }
              onChange={totalChangeHandler}
            />
            <button
              onClick={totalInputSubmitHandler}
              disabled={state.first_part.finished ? undefined : true}
            >
              Gönder
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Addition
