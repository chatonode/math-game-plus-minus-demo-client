import React from 'react'

import ProgressionDisplayer from './components/Progression/ProgressionDisplayer'

import DUMMY_QUESTIONS from '@/app/context/dummy-context'

const DUMMY_SINGLE_QUESTION = DUMMY_QUESTIONS[2]

const Home = () => {
  return (
    <>
      <ProgressionDisplayer question={DUMMY_SINGLE_QUESTION} />
    </>
  )
}

export default Home
