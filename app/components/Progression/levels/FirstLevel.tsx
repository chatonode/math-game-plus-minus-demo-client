// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import classes from './Levels.module.css'

import { TFirstLevelProps } from '../Level'

const FirstLevel = ({ myLevel, onNext }: TFirstLevelProps) => {
  return (
    <>
      <Backdrop>
        {/* <OverlayImage
          // imagePath={`level-${myLevel.toString().padStart(3, '0')}`}
          // level={myLevel}
        > */}
          <div className={classes['arrow-container']}>
            <button disabled={true}>
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
        {/* </OverlayImage> */}
      </Backdrop>
    </>
  )
}

export default FirstLevel
