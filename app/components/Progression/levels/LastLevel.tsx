// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import classes from './Levels.module.css'

import { TLastLevelProps } from '../Level'

const LastLevel = ({ myLevel, resultTime }: TLastLevelProps) => {
  const overlayImageSrc = `assets/images/levels/level-${myLevel
    .toString()
    .padStart(3, '0')}.jpg` // jpg
  const overlayImageAlt = `level-${myLevel}`

  return (
    <>
      <Backdrop>
        <OverlayImage imageSrc={overlayImageSrc} imageAlt={overlayImageAlt}>
          <h3 className={classes['result-text']}>{resultTime.toString()}</h3>
          {/* <div className={classes['arrow-container']}>
            <button onClick={onPrevious}>
              <Image
                src="assets/images/levels/arrow-left.png"
                width={50}
                height={50}
                // sizes="(max-width: 768px) 100vw"
                alt="left arrow"
              />
            </button>
            <button disabled={true}>
              <Image
                src="assets/images/levels/arrow-right.png"
                width={50}
                height={50}
                // sizes="(max-width: 768px) 100vw"
                alt="right arrow"
              />
            </button>
          </div> */}
        </OverlayImage>
      </Backdrop>
    </>
  )
}

export default LastLevel
