'use client'

import React, { useState, useEffect, useCallback, Suspense } from 'react'

import Timer, { TTimerScoreBody } from './Timer/Timer'
import Addition from '../Addition/Addition'
import Subtraction from '../Subtraction/Subtraction'
import { ELevel } from './Level'
import FirstLevel from './levels/FirstLevel'
import MidLevel from './levels/MidLevel'
import LastLevel from './levels/LastLevel'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

type TProgressionDisplayerProps = React.PropsWithChildren & {
  questions: TQuestionData[]
}

const ProgressionDisplayer = (props: TProgressionDisplayerProps) => {
  const [minLevel] = useState<ELevel>(ELevel.LEVEL_000)
  const [currentLevel, setCurrentLevel] = useState<ELevel>(ELevel.LEVEL_000) // Default: LEVEL_000
  const [maxLevel] = useState<ELevel>(ELevel.LEVEL_012)
  const [timerSeconds, setTimerSeconds] = useState<number>(0)

  const onPrevious = () => {
    setCurrentLevel((prevLevel) => {
      const isBelowMinLevel = prevLevel === minLevel

      if (isBelowMinLevel) {
        return prevLevel
      }

      // else
      const decrementedLevel = (prevLevel as number) - 1
      return decrementedLevel as ELevel
    })
  }

  const onNext = () => {
    setCurrentLevel((prevLevel) => {
      const isAboveMaxLevel = prevLevel === maxLevel

      if (isAboveMaxLevel) {
        return prevLevel
      }

      // else
      const incrementedLevel = (prevLevel as number) + 1
      return incrementedLevel as ELevel
    })
  }

  // Timer-related Code
  const completeProgressionHandler = (endTimeSeconds: number) => {
    setTimerSeconds(endTimeSeconds)

    const sendTimeScore = async () => {
      const contentId = 7
      const completionTimeSeconds = endTimeSeconds
      const completionRate = 100
      const score = 0

      const timerScoreBody: TTimerScoreBody = {
        contentId,
        completionTimeSeconds,
        completionRate,
        score,
      }

      const response = await fetch('/api/progresses', {
        method: 'POST',
        body: JSON.stringify(timerScoreBody),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Unable to send time score data to the server!')
      }

      const data = await response.json()

      console.log('Response Data:', Object.values(data))
    }

    sendTimeScore()
  }

  return (
    <>
      {/* *** Levels *** */}

      {/* Parallel Timer */}

      {currentLevel > ELevel.LEVEL_004 && (
        <Timer
          currentLevel={currentLevel}
          midLevel={ELevel.LEVEL_008} // Separate State for it maybe
          maxLevel={maxLevel}
          onComplete={completeProgressionHandler}
        />
      )}

      {/* Intro */}

      {/* <Suspense
        fallback={
          <p>
            Loading...
            {Array.from(['selam', 'canım']).map((message, index) => {
              console.log('Am i being rendered?')
              return <span key={index}>123-{message}</span>
            })}
          </p>
        }
      > */}
      {currentLevel === ELevel.LEVEL_000 && (
        <FirstLevel myLevel={ELevel.LEVEL_000} onNext={onNext} />
      )}
      {/* </Suspense> */}

      {currentLevel === ELevel.LEVEL_001 && (
        <MidLevel
          myLevel={ELevel.LEVEL_001}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {currentLevel === ELevel.LEVEL_002 && (
        <MidLevel
          myLevel={ELevel.LEVEL_002}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
      {currentLevel === ELevel.LEVEL_003 && (
        <MidLevel
          myLevel={ELevel.LEVEL_003}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
      {currentLevel === ELevel.LEVEL_004 && (
        <MidLevel
          myLevel={ELevel.LEVEL_004}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {/* Addition */}

      {/* Level005 - In Game */}

      {props.questions[0].params.operation === EOperationType.ADDITION &&
        (currentLevel as ELevel) <= ELevel.LEVEL_005 && (
          // (currentLevel as ELevel) > ELevel.LEVEL_001 &&
          <Addition
            question={props.questions[0]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {props.questions[1].params.operation === EOperationType.ADDITION &&
        (currentLevel as ELevel) === ELevel.LEVEL_006 && (
          <Addition
            question={props.questions[1]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {props.questions[2].params.operation === EOperationType.ADDITION &&
        (currentLevel as ELevel) === ELevel.LEVEL_007 && (
          <Addition
            question={props.questions[2]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {/* Level008 - In Game */}

      {/* Mitro */}

      {currentLevel === ELevel.LEVEL_008 && (
        <MidLevel
          myLevel={ELevel.LEVEL_008}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {/* Subtraction */}

      {/* Level009 - In Game */}

      {props.questions[3].params.operation === EOperationType.SUBTRACTION &&
        (currentLevel as ELevel) === ELevel.LEVEL_009 && (
          <Subtraction
            question={props.questions[3]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {props.questions[4].params.operation === EOperationType.SUBTRACTION &&
        (currentLevel as ELevel) === ELevel.LEVEL_010 && (
          <Subtraction
            question={props.questions[4]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {props.questions[5].params.operation === EOperationType.SUBTRACTION &&
        (currentLevel as ELevel) === ELevel.LEVEL_011 && (
          <Subtraction
            question={props.questions[5]}
            // onFirstPartReset={onPrevious}
            // onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            // onSecondPartFinish={onNext}

            onFinish={onNext}
          />
        )}

      {/* Level011 - In Game */}

      {/* Outro */}

      {currentLevel === ELevel.LEVEL_012 && (
        <LastLevel myLevel={ELevel.LEVEL_012} resultTime={timerSeconds} />
      )}
    </>
  )
}

export default ProgressionDisplayer
