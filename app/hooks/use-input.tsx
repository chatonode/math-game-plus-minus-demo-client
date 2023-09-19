// import React, { useReducer, useState } from 'react'

// type TInput<T> = {
//   value: T
//   isTouched: boolean
// }

// enum INPUT_ACTION_TYPE {
//   CHANGED = 'CHANGED',
//   TOUCHED = 'TOUCHED',
//   RESET = 'RESET',
// }

// type TInputChangedActionPayload<T> = {
//   value: T
// }

// type TInputResetActionPayload<T> = {
//   initialValue: TInput<T>
// }

// type TInputAction<T> =
//   | { type: INPUT_ACTION_TYPE.CHANGED; payload: TInputChangedActionPayload<T> }
//   | { type: INPUT_ACTION_TYPE.TOUCHED }
//   | { type: INPUT_ACTION_TYPE.RESET; payload: TInputResetActionPayload<T> }


// type TInputReducer<T> = React.Reducer<TInput<T>, TInputAction<T>>

// enum ETypeOfInput {
//   'number' = 'number'
// }

// const inputReducer = (prevInputState, action) {
//   switch (action.type) {
//     case INPUT_ACTION_TYPE.CHANGED:
//       return {
//         value: action.payload.value,
//         isTouched: prevInputState.isTouched,
//       }
//     case INPUT_ACTION_TYPE.TOUCHED:
//       return {
//         value: prevInputState.value,
//         isTouched: true,
//       }

//     case INPUT_ACTION_TYPE.RESET:
//       return {
//         value: action.payload.initialValue,
//         isTouched: false,
//       }
//     default:
//       return {
//         ...prevInputState,
//       }
//   }
// }

// type TUseInputProps<T> = {
//   initialInputValue: TInput<T>
//   validateInput: (value: T) => boolean // TODO
// }

// type TUseInputReturn<T> = {
//   value: T
//   isValid: boolean
//   hasError: boolean
//   inputChangeHandler: React.ChangeEventHandler
//   inputBlurHandler: () => void
//   resetInput: () => void
// }

// // type TUseInputHook<T> = (props: TUseInputProps<T>) => TUseInputReturn<T>


// // const useInput = () => ... Not allowed syntax in .tsx files
// function useInput<T extends ETypeOfInput>({
//   initialInputValue,
//   validateInput,
// }: TUseInputProps<T>): TUseInputReturn<T> {
//   const [inputState, dispatchAction] = useReducer<TInputReducer<T>>(
//     inputReducer,
//     initialInputValue,
//   )

//   // Native JS variables
//   const isValid = validateInput(inputState.value)
//   const hasError = inputState.isTouched && !isValid

//   const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatchAction({
//       type: INPUT_ACTION_TYPE.CHANGED,
//       payload: {
//         value: event.target.value as T,
//       },
//     })
//   }

//   const inputBlurHandler = () => {
//     dispatchAction({
//       type: INPUT_ACTION_TYPE.TOUCHED,
//     })
//   }

//   const resetInput = () => {
//     dispatchAction({
//       type: INPUT_ACTION_TYPE.RESET,
//       payload: {
//         initialValue: initialInputValue
//       },
//     })
//   }

//   return {
//     value: inputState.value,
//     isValid,
//     hasError,
//     inputChangeHandler,
//     inputBlurHandler,
//     resetInput,
//   }
// }

// export default useInput


// const validateNumberInput = (input: number) => {
//   const isInputValid = input.toString().trim().length !== 0 
//   return isInputValid
// }

// // const {

// // } = useInput<ETypeOfInput.number>({initialInputValue: 0, validateNumberInput(3)})
