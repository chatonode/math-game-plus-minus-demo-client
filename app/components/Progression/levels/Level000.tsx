'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'

import { TFirstLevelProps } from '../Level'

const Level000 = ({ onNext }: TFirstLevelProps) => {
  return (
    <>
      <Backdrop>
        <Image
          src="/assets/images/levels/level-000.png"
          width={500}
          height={500}
          //   sizes="(max-width: 768px) 100vw"
          alt="level-000"
        />
        <button disabled={true}>
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

export default Level000
