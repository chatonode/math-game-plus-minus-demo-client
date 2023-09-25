import React, { useState, useEffect, memo } from 'react'

import classes from './Timer.module.css'
import { ELevel } from '../Level'

export type TTimerScoreBody = {
  readonly contentId: 118
  completionTimeSeconds: number
  readonly completionRate: 100
  score: number
}

type TTimerProps = React.PropsWithChildren & {
  // onStart: () => void
  // onComplete: (completeTime: number) => void
  // onSetTime: (currentTime: number) => void
  // onComplete: () => void

  currentLevel: ELevel
  maxLevel: ELevel
  onComplete: (time: number) => void
}

type TTimeState = {
  currentTime: number
  isPaused: boolean
}

const Timer = (props: TTimerProps) => {
  const [timeState, setCurrentTimeState] = useState<TTimeState>({
    currentTime: 0,
    isPaused: false,
  })

  // Setup
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (props.currentLevel < props.maxLevel) {
        setCurrentTimeState((prevTimeState) => {
          if (!prevTimeState.isPaused) {
            return {
              currentTime: prevTimeState.currentTime + 1,
              isPaused: false,
            }
          }

          return {
            ...prevTimeState
          }
        })
      }
    }, 1000)

    if (props.currentLevel === props.maxLevel) {
      setCurrentTimeState((prevTimeState) => {
        return {
          currentTime: prevTimeState.currentTime,
          isPaused: true,
        }
      })
      props.onComplete(timeState.currentTime)
    }

    // Teardown
    return () => {
      clearInterval(intervalId)
    }
  }, [props.currentLevel])

  return <div className={classes.timer}>{timeState.currentTime}</div>
}

export default memo(Timer)
