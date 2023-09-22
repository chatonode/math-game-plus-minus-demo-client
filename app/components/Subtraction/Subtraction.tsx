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
  SUCCESS = 'success',
  FAILURE = 'failure',
  RESET = 'reset',
  CHANGE_INPUT = 'change-input',
  COMPLETE = 'complete',
}

type TSubtractionUpdateActionPayload = {
  selected_box_type: EBoxScore
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
  | { type: ESubtractionActionType.SUCCESS }
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
      }
    case ESubtractionActionType.SUCCESS:
      return {
        ...prevSubtractionState,
        first_part: {
          ...prevSubtractionState.first_part,
          finished: true,
        },
      }

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
  onFirstPartFinish: () => void
  // onSecondPartReset: () => void
  onSecondPartFinish: () => void
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
    dispatch({
      type: ESubtractionActionType.RESET,
      payload: { initial_box_status: initialBoxStatus },
    })
  }, [])

  const removeBoxHandler = (type: EBoxScore) => {

    dispatch({
      type: ESubtractionActionType.UPDATE,
      payload: {
        selected_box_type: type,
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
      props.onSecondPartFinish()
    }
  }

  useEffect(() => {
    const expected = props.question.params.expected_result
    const actual = state.first_part.current_total
    if (actual === expected) {
      dispatch({
        type: ESubtractionActionType.SUCCESS,
      })
      props.onFirstPartFinish()
    }
  }, [state.first_part.current_total])

  console.log('Inside Subtraction:')
  console.log('initialRemaining', props.question.params.number_to_operate)
  console.log(
    'currentRemaining',
    state.first_part.current_total - props.question.params.expected_result
  )


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
          {/* TODO: Top-Right Panel */}
          <ActiveBoxList  // For: 81
            currentRemaining={    // 200
              state.first_part.current_total -
              props.question.params.expected_result
            }
            initialRemaining={props.question.params.number_to_operate}  // 281
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
              // TODO: Check Condition
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
