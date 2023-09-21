// 'use client'

import Image from 'next/image'

import Backdrop from '../../UI/Overlay/Backdrop'
import OverlayImage from '../OverlayImage'

import level000Image from '@/public/assets/images/levels/level-000.png'

import classes from './Levels.module.css'

import { TFirstLevelProps } from '../Level'

const Level000 = ({ myLevel, onNext }: TFirstLevelProps) => {
  return (
    <>
      <Backdrop>
        <OverlayImage
          // imagePath={`level-${myLevel.toString().padStart(3, '0')}`}
          imageSrc={level000Image.src}
        >
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
        </OverlayImage>
      </Backdrop>
    </>
  )
}

export default Level000