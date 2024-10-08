'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import classes from './Levels.module.css'

import { TLevelProps } from '../Level'

const MidLevel = ({ myLevel, onPrevious, onNext }: TLevelProps) => {
  const overlayImageSrc = `assets/images/levels/level-${myLevel
    .toString()
    .padStart(3, '0')}.png`
  const overlayImageAlt = `level-${myLevel}`

  return (
    <>
      <Backdrop>
        <OverlayImage imageSrc={overlayImageSrc} imageAlt={overlayImageAlt}>
          <div className={classes['arrow-container']}>
            <button onClick={onPrevious}>
              <Image
                src="assets/images/levels/arrow-left.png"
                width={50}
                height={50}
                // sizes="(max-width: 768px) 100vw"
                alt="left arrow"
              />
            </button>
            <button onClick={onNext}>
              <Image
                src="assets/images/levels/arrow-right.png"
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

export default MidLevel
