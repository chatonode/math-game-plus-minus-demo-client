import React from 'react'
import dynamic from 'next/dynamic'

// import Image from 'next/image'

import overlayImage from '@/public/assets/images/levels/level-000.png'

// import { ImagePathsArray as ipa } from './OverlayImages'

import classes from './OverlayImage.module.css'

type TOverlayHelperProps = React.PropsWithChildren & {
  imageSrc: string
}

// @ref-link: https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image
const OverlayImage = (props: TOverlayHelperProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageSrc})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={classes['overlay-image']}
    >
      {props.children}
    </div>
  )
}

export default OverlayImage
