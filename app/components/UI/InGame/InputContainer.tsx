import React from 'react'

import classes from './InputContainer.module.css'

export enum EInputType {
  NUMBER = 'number',
}

type TInputContainerProps<T> = React.PropsWithChildren & {
  type: EInputType
  currentValue: T | string
  changeHandler: React.ChangeEventHandler
  submitHandler: React.MouseEventHandler
  min?: number
  max?: number
  disabled: boolean
}

function InputContainer<T>(props: TInputContainerProps<T>) {
  return (
    <div className={classes['input-container']}>
      <input
        type={props.type as string}
        value={props.currentValue as string}
        // defaultValue={''}
        onChange={props.changeHandler}
        minLength={props.min}
        maxLength={props.max}
      />
      <button
        type="submit"
        onClick={props.submitHandler}
        disabled={props.disabled ? true : undefined}
        className={classes.submit}
      >
        Gönder
      </button>
    </div>
  )
}

export default InputContainer
