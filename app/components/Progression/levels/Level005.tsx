// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'

import { TLastLevelProps } from '../Level'

const Level005 = ({ onPrevious }: TLastLevelProps) => {
  return (
    <>
      <Backdrop>
        <Image
          src="/assets/images/levels/lahey-bobandy.gif"
          width={500}
          height={500}
          //   sizes="(max-width: 768px) 100vw"
          alt="level-005"
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
        <button disabled={true}>
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

export default Level005