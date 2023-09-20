import React from 'react'

import ProgressionDisplayer from './components/Progression/ProgressionDisplayer'

import DUMMY_QUESTIONS from '@/app/context/dummy-context'

const generatedQuestionIndex = Math.floor(
  Math.random() * (DUMMY_QUESTIONS.length - 1)
)

console.log(generatedQuestionIndex)

const DUMMY_SINGLE_QUESTION = DUMMY_QUESTIONS[generatedQuestionIndex]

const Home = () => {
  return (
    <>
      <ProgressionDisplayer question={DUMMY_SINGLE_QUESTION} />
    </>
  )
}

export default Home
