'use client'

import React, { useState } from 'react'

import Addition from '../Addition/Addition'
import { ELevel } from './Level'
import Level000 from './levels/Level000'
import Level001 from './levels/Level001'
import Level002 from './levels/Level002'
import Level003 from './levels/Level003'
import Level004 from './levels/Level004'
import Level011 from './levels/Level011'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

type TProgressionDisplayerProps = React.PropsWithChildren & {
  questions: TQuestionData[]
}

const ProgressionDisplayer = (props: TProgressionDisplayerProps) => {
  const [minLevel] = useState<ELevel>(ELevel.LEVEL_000)
  const [currentLevel, setCurrentLevel] = useState<ELevel>(ELevel.LEVEL_000)
  const [maxLevel] = useState<ELevel>(ELevel.LEVEL_011)

  // const operation = props.question.params.operation

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
      const isAboveMinLevel = prevLevel === maxLevel

      if (isAboveMinLevel) {
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

  return (
    <>
      {/* Levels */}

      {currentLevel === ELevel.LEVEL_000 && (
        <Level000 myLevel={ELevel.LEVEL_000} onNext={onNext} />
      )}

      {currentLevel === ELevel.LEVEL_001 && (
        <Level001
          myLevel={ELevel.LEVEL_001}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {currentLevel === ELevel.LEVEL_002 && (
        <Level002
          myLevel={ELevel.LEVEL_002}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
      {currentLevel === ELevel.LEVEL_003 && (
        <Level003
          myLevel={ELevel.LEVEL_003}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
      {currentLevel === ELevel.LEVEL_004 && (
        <Level004
          myLevel={ELevel.LEVEL_004}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {/* Level005 - In Game */}

      {/* ... */}

      {/* Level010 - In Game */}

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

      {currentLevel === ELevel.LEVEL_011 && (
        <Level011
          myLevel={ELevel.LEVEL_011}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}

      {/* {operation === EOperationType.SUBTRACTION && <p>TODO: Subtraction</p>} */}
    </>
  )
}

export default ProgressionDisplayer
