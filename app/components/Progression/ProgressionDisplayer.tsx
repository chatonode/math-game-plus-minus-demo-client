'use client'

import React, { useState } from 'react'

import Addition from '../Addition/Addition'
import { ELevel } from './Level'
import Level000 from './levels/Level000'
import Level001 from './levels/Level001'
import Level003 from './levels/Level003'

import { TQuestionData, EOperationType } from '@/app/context/dummy-context'

type TProgressionDisplayerProps = React.PropsWithChildren & {
  question: TQuestionData
}

const ProgressionDisplayer = (props: TProgressionDisplayerProps) => {
  const [minLevel] = useState<ELevel>(ELevel.LEVEL_000)
  const [currentLevel, setCurrentLevel] = useState<ELevel>(ELevel.LEVEL_000)
  const [maxLevel] = useState<ELevel>(ELevel.LEVEL_009)

  const operation = props.question.params.operation

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
      {operation === EOperationType.ADDITION && (
        <Addition
          question={props.question}
          onFirstPartReset={onPrevious}
          onFirstPartFinish={onNext}
          onSecondPartReset={onPrevious}
          onSecondPartFinish={onNext}
        />
      )}
      {operation === EOperationType.SUBTRACTION && <p>TODO: Subtraction</p>}
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
      {/* Level002 - In Game */}
      {currentLevel === ELevel.LEVEL_003 && (
        <Level003
          myLevel={ELevel.LEVEL_003}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </>
  )
}

export default ProgressionDisplayer
