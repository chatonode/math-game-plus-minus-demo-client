'use client'

import React, { useState, useEffect, memo } from 'react'

import classes from './Timer.module.css'
import { ELevel } from '../Level'

export type TTimerScoreBody = {
  readonly contentId: 7
  completionTimeSeconds: number
  readonly completionRate: 100
  readonly score: 0
}

type TTimerProps = React.PropsWithChildren & {
  // onStart: () => void
  // onComplete: (completeTime: number) => void
  // onSetTime: (currentTime: number) => void
  // onComplete: () => void

  currentLevel: ELevel
  midLevel: ELevel
  maxLevel: ELevel
  onComplete: (time: number) => void
}

type TTimeState = {
  currentTime: number
  isPaused: boolean
}

const TIMEOUT_MAX_SECONDS = 600 // -> 10 minutes

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
          // Timeout
          if (prevTimeState.currentTime ===  TIMEOUT_MAX_SECONDS) {
            clearInterval(intervalId)
            return {
              currentTime: TIMEOUT_MAX_SECONDS,
              isPaused: true,
            }
          }
          // Increment
          if (!prevTimeState.isPaused) {
            return {
              currentTime: prevTimeState.currentTime + 1,
              isPaused: false,
            }
          }

          return {
            ...prevTimeState,
          }
        })
      }
    }, 1000)

    // Pause
    if (props.currentLevel === props.maxLevel) {
      clearInterval(intervalId)
      setCurrentTimeState((prevTimeState) => {
        return {
          currentTime: prevTimeState.currentTime,
          isPaused: true,
        }
      })
      props.onComplete(timeState.currentTime)
    }

    // Pause
    if (props.currentLevel === props.midLevel) {
      setCurrentTimeState((prevTimeState) => {
        return {
          currentTime: prevTimeState.currentTime,
          isPaused: true,
        }
      })
    }

    // Continue
    if (
      props.currentLevel !== props.midLevel &&
      props.currentLevel !== props.maxLevel
    ) {
      setCurrentTimeState((prevTimeState) => {
        return {
          currentTime: prevTimeState.currentTime,
          isPaused: false,
        }
      })
    }

    // Teardown
    return () => {
      clearInterval(intervalId)
    }
  }, [props.currentLevel])

  return <div className={classes.timer} style={{
    // display: timeState.currentTime === TIMEOUT_MAX_SECONDS ? 'none' : 'inherit'
    // animationDuration: timeState.currentTime === TIMEOUT_MAX_SECONDS ? 'inherit' : '0s'
    display: props.currentLevel === props.maxLevel || props.currentLevel === props.midLevel ? 'none' : 'inherit'
  }}>{timeState.currentTime}</div>
}

export default memo(Timer)
