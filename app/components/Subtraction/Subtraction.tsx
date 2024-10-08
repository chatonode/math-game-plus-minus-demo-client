'use client'

import { useReducer, useCallback, useEffect } from 'react'

import subtractionBackgroundImage from '@/public/assets/images/UI_Bg.jpg'

import ActiveBoxList from './Active/ActiveBoxList'
import BoxList from '../UI/InGame/Warehouse/BoxList'
import { EBoxScore } from '../UI/InGame/Box'
import Dialog from '../UI/InGame/Dialog'
import InputContainer, { EInputType } from '../UI/InGame/InputContainer'

import classes from './Subtraction.module.css'

import {
  convertFromNumTo2DBoxDigits,
  convertFrom1DBoxDigitsToNum,
} from '@/app/_helpers/BoxHelper'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'
// import ActiveBoxList from './Active/ActiveBoxList'

type TSubtractionState = {
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

enum ESubtractionActionType {
  UPDATE = 'update',
  // SUCCESS = 'success',
  FAILURE = 'failure',
  RESET = 'reset',
  CHANGE_INPUT = 'change-input',
  COMPLETE = 'complete',
}

type TSubtractionUpdateActionPayload = {
  selected_box_type: EBoxScore
  expected_result: number
}

type TSubtractionResetActionPayload = {
  initial_box_status: number[][]
}

type TSubtractionChangeInputActionPayload = {
  entered_input: number
}

type TSubtractionAction =
  | {
      type: ESubtractionActionType.UPDATE
      payload: TSubtractionUpdateActionPayload
    }
  // | { type: ESubtractionActionType.SUCCESS }
  | { type: ESubtractionActionType.FAILURE }
  | {
      type: ESubtractionActionType.RESET
      payload: TSubtractionResetActionPayload
    }
  | {
      type: ESubtractionActionType.CHANGE_INPUT
      payload: TSubtractionChangeInputActionPayload
    }
  | { type: ESubtractionActionType.COMPLETE }

const subtractionReducer = (
  prevSubtractionState: TSubtractionState,
  action: TSubtractionAction
): TSubtractionState => {
  switch (action.type) {
    case ESubtractionActionType.UPDATE:
      // const incomingValue = Math.pow(10, parseInt(action.payload.selected_box_type) -1)

      const incomingValue = parseInt(action.payload.selected_box_type)

      const currentTotalValue =
        prevSubtractionState.first_part.current_total - incomingValue

      // SUCCESS CASE
      if (currentTotalValue === action.payload.expected_result) {
        return {
          ...prevSubtractionState,
          first_part: {
            current_box_status: convertFromNumTo2DBoxDigits(currentTotalValue),
            current_total: currentTotalValue,
            finished: true,
          },
          second_part: {
            ...prevSubtractionState.second_part,
          },
        }
      }

      // Else
      return {
        ...prevSubtractionState,
        first_part: {
          ...prevSubtractionState.first_part,
          current_box_status: convertFromNumTo2DBoxDigits(currentTotalValue),
          current_total: currentTotalValue,
        },
      }
    case ESubtractionActionType.RESET:
      return {
        ...prevSubtractionState,
        first_part: {
          ...prevSubtractionState.first_part,
          current_box_status: action.payload.initial_box_status,
          current_total: convertFrom1DBoxDigitsToNum(
            action.payload.initial_box_status
          ),
          finished: false,
        },
        second_part: {
          current_total: 0,
          finished: false,
        },
      }
    // case ESubtractionActionType.SUCCESS:
    //   return {
    //     ...prevSubtractionState,
    //     first_part: {
    //       ...prevSubtractionState.first_part,
    //       finished: true,
    //     },
    //   }

    case ESubtractionActionType.CHANGE_INPUT:
      return {
        ...prevSubtractionState,
        ...prevSubtractionState.first_part,
        second_part: {
          current_total: action.payload.entered_input,
          finished: false,
        },
      }

    case ESubtractionActionType.COMPLETE:
      return {
        ...prevSubtractionState,
        ...prevSubtractionState.first_part,
        second_part: {
          ...prevSubtractionState.second_part,
          finished: true,
        },
      }
    // TODO: Failure Case
    case ESubtractionActionType.FAILURE:
      return {
        ...prevSubtractionState,
        first_part: {
          ...prevSubtractionState.first_part,
        },
        second_part: {
          ...prevSubtractionState.second_part,
          finished: false,
        },
      }
    default:
      return {
        ...prevSubtractionState,
      }
  }
}

type TSubtractionProps = React.PropsWithChildren & {
  question: TQuestionData
  // onFirstPartReset: () => void
  // onFirstPartFinish: () => void
  // onSecondPartReset: () => void
  // onSecondPartFinish: () => void

  onFinish: () => void
  // onReset: () => void
}

const Subtraction = (props: TSubtractionProps) => {
  const initialBoxStatus = convertFromNumTo2DBoxDigits(
    props.question.params.first_number
  )

  const [state, dispatch] = useReducer(subtractionReducer, {
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
    if (state.first_part.current_total === props.question.params.first_number) {
      // early return during Initial State
      return
    }

    dispatch({
      type: ESubtractionActionType.RESET,
      payload: { initial_box_status: initialBoxStatus },
    })

    // props.onReset()
  }, [state.first_part.current_total])

  const removeBoxHandler = (type: EBoxScore) => {
    dispatch({
      type: ESubtractionActionType.UPDATE,
      payload: {
        selected_box_type: type,
        expected_result: props.question.params.expected_result,
      },
    })
  }

  const totalChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Early return
    if (event.target.value === '') {
      return
    }

    const totalInputValue = parseInt(event.target.value.trim())

    dispatch({
      type: ESubtractionActionType.CHANGE_INPUT,
      payload: {
        entered_input: totalInputValue,
      },
    })
  }

  const totalInputSubmitHandler = (event: React.MouseEvent) => {
    event.preventDefault()

    if (
      state.second_part.current_total === props.question.params.expected_result
    ) {
      dispatch({
        type: ESubtractionActionType.COMPLETE,
      })
      // props.onSecondPartFinish()
      props.onFinish()
    }
  }

  return (
    <>
      <main
        className="container"
        style={{
          backgroundImage: `url(${subtractionBackgroundImage.src})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className={`${classes.bar} ${classes.leftbar}${
            state.first_part.finished ? ' ' + classes.locked : ''
          }`}
        >
          <BoxList boxColumns={state.first_part.current_box_status} />
        </div>

        <div
          className={`${classes.bar} ${classes.rightbar}${
            state.second_part.finished ? ' ' + classes.locked : ''
          }`}
        >
          <ActiveBoxList // For: 81
            currentRemaining={
              // 200
              state.first_part.current_total -
              props.question.params.expected_result
            }
            initialRemaining={props.question.params.number_to_operate} // 281
            onRemove={removeBoxHandler}
            onReset={resetQuestionHandler}
            disabled={state.first_part.finished === true ? true : false}
          />

          <>
            {!state.second_part.finished && !state.first_part.finished && (
              <Dialog message={props.question.first_part} />
            )}
            {!state.second_part.finished && state.first_part.finished && (
              <Dialog message={props.question.second_part} />
            )}
            {state.second_part.finished && (
              <Dialog message={props.question.success_message} />
            )}
          </>

          {state.first_part.finished && (
            <InputContainer<number>
              type={EInputType.NUMBER}
              currentValue={
                state.second_part.current_total === 0
                  ? ''
                  : state.second_part.current_total
              }
              isValid={
                state.second_part.current_total ===
                props.question.params.expected_result
              }
              hasError={
                state.second_part.current_total !== 0 &&
                state.second_part.current_total !==
                  props.question.params.expected_result &&
                state.second_part.current_total !==
                  props.question.params.number_to_operate
                  ? true
                  : false
              }
              changeHandler={totalChangeHandler}
              submitHandler={totalInputSubmitHandler}
              min={0}
              max={props.question.params.expected_result.toString().length}
              disabled={state.first_part.finished ? false : true}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default Subtraction
