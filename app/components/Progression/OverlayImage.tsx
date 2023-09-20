import React from 'react'

// import Image from 'next/image'

import overlayImage from '@/public/assets/images/levels/overlay-image.png'

import classes from './OverlayImage.module.css'

type TOverlayHelperProps = React.PropsWithChildren

// @ref-link: https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image
const OverlayImage = (props: TOverlayHelperProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${overlayImage.src})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={classes['overlay-image']}
    >
      {props.children}
    </div>

    // <Image
    //   src={backgroundImagePath}
    //   width={800}
    //   height={600}
    //   //   sizes="(max-width: 768px) 100vw"
    //   alt={`level-${props.current_level}`}
    // />
  )
}

export default OverlayImage
