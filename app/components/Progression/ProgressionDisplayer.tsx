'use client'

import React, { useState, useMemo } from 'react'

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
  const [currentLevel, setCurrentLevel] = useState<ELevel>(ELevel.LEVEL_011) // Default: LEVEL_000
  const [maxLevel] = useState<ELevel>(ELevel.LEVEL_018)

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

  console.log('minLevel?:', minLevel)
  console.log('currentLevel?:', currentLevel)
  console.log('maxLevel?:', maxLevel)

  // const levels = Object.values(ELevel).filter(
  //   (value) => typeof value === 'number'
  // ) as ELevel[]

  return (
    <>
      {/* *** Levels *** */}

      {/* Intro */}

      {currentLevel === ELevel.LEVEL_000 && (
        <FirstLevel myLevel={ELevel.LEVEL_000} onNext={onNext} />
      )}

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
        (currentLevel as ELevel) <= ELevel.LEVEL_006 && (
          <Addition
            question={props.questions[0]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {props.questions[1].params.operation === EOperationType.ADDITION &&
        ((currentLevel as ELevel) === ELevel.LEVEL_007 ||
          (currentLevel as ELevel) === ELevel.LEVEL_008) && (
          <Addition
            question={props.questions[1]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {props.questions[2].params.operation === EOperationType.ADDITION &&
        ((currentLevel as ELevel) === ELevel.LEVEL_009 ||
          (currentLevel as ELevel) === ELevel.LEVEL_010) && (
          <Addition
            question={props.questions[2]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {/* Level010 - In Game */}

      {/* Mitro */}

      {currentLevel === ELevel.LEVEL_011 && (
        <MidLevel
          myLevel={ELevel.LEVEL_011}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {/* Subtraction */}

      {/* Level012 - In Game */}

      {props.questions[3].params.operation === EOperationType.SUBTRACTION &&
        ((currentLevel as ELevel) === ELevel.LEVEL_012 ||
          (currentLevel as ELevel) === ELevel.LEVEL_013) && (
          <Subtraction
            question={props.questions[3]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {props.questions[4].params.operation === EOperationType.SUBTRACTION &&
        ((currentLevel as ELevel) === ELevel.LEVEL_014 ||
          (currentLevel as ELevel) === ELevel.LEVEL_015) && (
          <Subtraction
            question={props.questions[4]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {props.questions[5].params.operation === EOperationType.SUBTRACTION &&
        ((currentLevel as ELevel) === ELevel.LEVEL_016 ||
          (currentLevel as ELevel) === ELevel.LEVEL_017) && (
          <Subtraction
            question={props.questions[5]}
            // onFirstPartReset={onPrevious}
            onFirstPartFinish={onNext}
            // onSecondPartReset={onPrevious}
            onSecondPartFinish={onNext}
          />
        )}

      {/* Level017 - In Game */}

      {/* Outro */}

      {/* {currentLevel === ELevel.LEVEL_018 && (
        <LastLevel myLevel={ELevel.LEVEL_018} onPrevious={onPrevious} />
      )} */}
    </>
  )
}

export default ProgressionDisplayer
