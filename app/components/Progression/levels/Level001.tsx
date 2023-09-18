'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'

import { TLevelProps } from '../Level'

const Level001 = ({ onPrevious, onNext }: TLevelProps) => {
  return (
    <>
      <Backdrop>
        <Image
          src="/assets/images/levels/level-001.png"
          width={500}
          height={500}
          //   sizes="(max-width: 768px) 100vw"
          alt="level-001"
        />
        <button onClick={onPrevious}>
          <Image
            src="/assets/images/levels/arrow-left.png"
            width={100}
            height={100}
            // sizes="(max-width: 768px) 100vw"
            alt="left arrow"
          />
        </button>
        <button onClick={onNext}>
          <Image
            src="/assets/images/levels/arrow-right.png"
            width={100}
            height={100}
            // sizes="(max-width: 768px) 100vw"
            alt="right arrow"
          />
        </button>
      </Backdrop>
    </>
  )
}

export default Level001
