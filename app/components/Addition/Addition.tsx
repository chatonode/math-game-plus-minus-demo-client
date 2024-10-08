'use client'

import { useReducer, useCallback, useEffect } from 'react'

import additionBackgroundImage from '@/public/assets/images/UI_Bg.jpg'

import ActiveBoxList from './Active/ActiveBoxList'
import BoxList from '../UI/InGame/Warehouse/BoxList'
import { EBoxScore } from '../UI/InGame/Box'
import Dialog from '../UI/InGame/Dialog'
import InputContainer, { EInputType } from '../UI/InGame/InputContainer'

import classes from './Addition.module.css'

import {
  convertFromNumTo2DBoxDigits,
  convertFrom1DBoxDigitsToNum,
} from '@/app/_helpers/BoxHelper'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

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
  // SUCCESS = 'success',
  FAILURE = 'failure',
  RESET = 'reset',
  CHANGE_INPUT = 'change-input',
  COMPLETE = 'complete',
}

type TAdditionUpdateActionPayload = {
  selected_box_type: EBoxScore
  expected_result: number
}

type TAdditionResetActionPayload = {
  initial_box_status: number[][]
}

type TAdditionChangeInputActionPayload = {
  entered_input: number
}

type TAdditionAction =
  | { type: EAdditionActionType.UPDATE; payload: TAdditionUpdateActionPayload }
  // | { type: EAdditionActionType.SUCCESS }
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

      // SUCCESS CASE
      if (currentTotalValue === action.payload.expected_result) {
        return {
          ...prevAdditionState,
          first_part: {
            current_box_status: convertFromNumTo2DBoxDigits(currentTotalValue),
            current_total: currentTotalValue,
            finished: true,
          },
          second_part: {
            ...prevAdditionState.second_part,
          },
        }
      }

      // Else
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
        second_part: {
          current_total: 0,
          finished: false,
        },
      }
    // case EAdditionActionType.SUCCESS:
    //   return {
    //     ...prevAdditionState,
    //     first_part: {
    //       ...prevAdditionState.first_part,
    //       finished: true,
    //     },
    //   }

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
    case EAdditionActionType.FAILURE:
      return {
        ...prevAdditionState,
        first_part: {
          ...prevAdditionState.first_part,
        },
        second_part: {
          ...prevAdditionState.second_part,
          finished: false,
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
  // onFirstPartReset: () => void
  // onFirstPartFinish: () => void
  // onSecondPartReset: () => void
  // onSecondPartFinish: () => void

  onFinish: () => void
  // onReset: () => void
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
    if (state.first_part.current_total === props.question.params.first_number) {
      // early return during Initial State
      return
    }

    dispatch({
      type: EAdditionActionType.RESET,
      payload: { initial_box_status: initialBoxStatus },
    })

    // props.onReset()
  }, [state.first_part.current_total])

  const addBoxHandler = (type: EBoxScore) => {
    dispatch({
      type: EAdditionActionType.UPDATE,
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
      type: EAdditionActionType.CHANGE_INPUT,
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
        type: EAdditionActionType.COMPLETE,
      })
      // props.onSecondPartFinish()
      props.onFinish()
    }
  }

  // Delay - START
  // let delay: any

  // const checkTotalHasZeroes = () => {
  //   delay = setInterval(() => {}, 1500)
  // }

  // useEffect(() => {
  //   if (state.first_part.current_total.toString().includes('0')) {
  //     console.log('AM I INSIDE INTERVAL?:', state.first_part.current_total.toString())
  //     checkTotalHasZeroes()
  //   }

  //   // Teardown
  //   return () => {
  //     clearInterval(delay)
  //   }
  // }, [state.first_part.current_total])

  // Delay - END

  return (
    <>
      <main
        className="container"
        style={{
          backgroundImage: `url(${additionBackgroundImage.src})`,
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
          <ActiveBoxList
            currentRemaining={
              props.question.params.expected_result -
              state.first_part.current_total
            }
            initialRemaining={props.question.params.number_to_operate}
            onAdd={addBoxHandler}
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

export default Addition
