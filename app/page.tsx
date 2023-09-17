import React from 'react'

import Addition from '@/app/components/Addition/Addition'

import DUMMY_QUESTIONS, { EOperationType } from '@/app/context/dummy-context'

const DUMMY_SINGLE_QUESTION = DUMMY_QUESTIONS[0]

const Home = () => {
  const operation = DUMMY_SINGLE_QUESTION.params.operation

  return (
    <>
      {operation === EOperationType.ADDITION && (
        <Addition question={DUMMY_SINGLE_QUESTION} />
      )}
      {operation === EOperationType.SUBTRACTION && <p>TODO: Subtraction</p>}
    </>
  )
}

export default Home
