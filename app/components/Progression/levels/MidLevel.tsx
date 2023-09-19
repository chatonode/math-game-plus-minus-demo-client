// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import { TLevelProps } from '../Level'

const MidLevel = ({ myLevel, onPrevious, onNext }: TLevelProps) => {
  return (
    <>
      <Backdrop>
        <OverlayImage current_level={myLevel} />
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

export default MidLevel
