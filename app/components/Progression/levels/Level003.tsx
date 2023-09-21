// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import level003Image from '@/public/assets/images/levels/level-003.png'

import classes from './Levels.module.css'

import { TLevelProps } from '../Level'

const Level003 = ({ myLevel, onPrevious, onNext }: TLevelProps) => {
  return (
    <>
      <Backdrop>
        <OverlayImage
          imageSrc={level003Image.src}
        >
          <div className={classes['arrow-container']}>
            <button onClick={onPrevious}>
              <Image
                src="/assets/images/levels/arrow-left.png"
                width={50}
                height={50}
                // sizes="(max-width: 768px) 100vw"
                alt="left arrow"
              />
            </button>
            <button onClick={onNext}>
              <Image
                src="/assets/images/levels/arrow-right.png"
                width={50}
                height={50}
                // sizes="(max-width: 768px) 100vw"
                alt="right arrow"
              />
            </button>
          </div>
        </OverlayImage>
      </Backdrop>
    </>
  )
}

export default Level003