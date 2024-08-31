'use client'

import React from 'react'

import ProgressionDisplayer from './components/Progression/ProgressionDisplayer'

import DUMMY_QUESTIONS from '@/app/context/dummy-context'

const Home = () => {
  return (
    <>
      <ProgressionDisplayer questions={DUMMY_QUESTIONS} />
    </>
  )
}

export default Home
