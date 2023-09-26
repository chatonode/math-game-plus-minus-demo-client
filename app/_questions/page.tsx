// 'use client'

import Link from 'next/link'

import DUMMY_QUESTIONS from '../context/dummy-context'

const Questions = () => {
  return (
    <div>
      <h1>Sorular</h1>
      <h2>Kategoriler</h2>
      <ul>
        <li key="addition">
          <h3>Toplama</h3>
          <ul>
            {DUMMY_QUESTIONS.map((question) => {
              return (
                <li key={question.id}>
                  <Link href={`/questions/${question.id}`}>{question.title}</Link>
                </li>
              )
            })}
          </ul>
        </li>
        <li key="subtraction">
          <h3>Çıkartma</h3>
          <ul>TODO</ul>
        </li>
      </ul>
    </div>
  )
}

export default Questions
