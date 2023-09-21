import React from 'react'

import Image from 'next/image'

import classes from './OverlayImage.module.css'

type TOverlayHelperProps = React.PropsWithChildren & {
  imageSrc: string
  imageAlt: string
}

// @ref-link: https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image
const OverlayImage = (props: TOverlayHelperProps) => {
  return (
    <div className={classes['overlay-image']}>
      {/* @ref-link: https://stackoverflow.com/a/70723881/16855913 */}
      <Image
        src={props.imageSrc}
        quality={100}
        width={800}
        height={600}
        //   sizes="(max-width: 768px) 100vw"
        alt={props.imageAlt}
      />
      {props.children}
    </div>
  )
}

export default OverlayImage
