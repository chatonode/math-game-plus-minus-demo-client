import React from 'react'

// import Image from 'next/image'

// import Backdrop from '../UI/Overlay/Backdrop'

import overlayImage from '@/public/assets/images/levels/overlay-image.png'

type TOverlayHelperProps = React.PropsWithChildren

// @ref-link: https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image
const OverlayImage = (props: TOverlayHelperProps) => {
  // CSS
  // const backgroundImagePath = `../../../public/assets/images/levels/level-${props.current_level
  //   .toString()
  //   .padStart(3, '0')}.png` // 0 -> '000'

  // JS
  // const backgroundImagePath = `/assets/images/levels/level-${props.current_level
  //   .toString()
  //   .padStart(3, '0')}.png` // 0 -> '000'

  // console.log(backgroundImagePath)

  return (
    <div
      style={{
        backgroundImage: `url(${overlayImage.src})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
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
