// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import { TLastLevelProps } from '../Level'

const LastLevel = ({ myLevel, onPrevious }: TLastLevelProps) => {
  return (
    <>
      <Backdrop>
        <OverlayImage>
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
        </OverlayImage>
      </Backdrop>
    </>
  )
}

export default LastLevel
