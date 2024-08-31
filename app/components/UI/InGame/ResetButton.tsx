'use client'

import React, { memo } from 'react'

import classes from './ResetButton.module.css'

import resetButton from '@/public/assets/images/Reset_Btn.png'

type TReturnButtonProps = React.PropsWithChildren & {
  onReset: () => void
}

const ResetButton = (props: TReturnButtonProps) => {
  return (
    <div className={classes.reset}>
      <button
        style={{
          backgroundImage: `url(${resetButton.src})`,
        }}
        onClick={props.onReset}
      />
    </div>
  )
}

export default memo(ResetButton)
