import Image from 'next/image'

// import Backdrop from '../UI/Overlay/Backdrop'

// import classes from './OverlayHelper.module.css'

import { ELevel } from './Level'

type TOverlayHelperProps = {
  current_level: ELevel
  //   isHidden: boolean
}

const OverlayImage = (props: TOverlayHelperProps) => {
  // const backgroundImagePath = `../../../public/assets/images/levels/level-${props.current_level
  //   .toString()
  //   .padStart(3, '0')}.png` // 0 -> '000'
  const backgroundImagePath = `/assets/images/levels/level-${props.current_level
    .toString()
    .padStart(3, '0')}.png` // 0 -> '000'

  console.log(backgroundImagePath)

  return (
    <div
    // style={{ backgroundImage: `url("${backgroundImagePath}")` }}
    // className={classes['overlay-helper']}
    >
      <Image
        src={backgroundImagePath}
        width={800}
        height={600}
        //   sizes="(max-width: 768px) 100vw"
        alt={`level-${props.current_level}`}
      />
    </div>
  )
}

export default OverlayImage


// TODO: CSS Background
// import React from 'react'

// // import Image from 'next/image'

// // import Backdrop from '../UI/Overlay/Backdrop'

// import classes from './OverlayImage.module.css'

// import { ELevel } from './Level'

// type TOverlayHelperProps = React.PropsWithChildren & {
//   // current_level: ELevel
//   //   isHidden: boolean
// }

// const OverlayImage = (props: TOverlayHelperProps) => {
//   // CSS
//   // const backgroundImagePath = `../../../public/assets/images/levels/level-${props.current_level
//   //   .toString()
//   //   .padStart(3, '0')}.png` // 0 -> '000'

//   // JS
//   // const backgroundImagePath = `/assets/images/levels/level-${props.current_level
//   //   .toString()
//   //   .padStart(3, '0')}.png` // 0 -> '000'

//   // console.log(backgroundImagePath)

//   return (

//     <div className={classes['overlay-image']}>{props.children}</div>

//     // <Image
//     //   src={backgroundImagePath}
//     //   width={800}
//     //   height={600}
//     //   //   sizes="(max-width: 768px) 100vw"
//     //   alt={`level-${props.current_level}`}
//     // />
//   )
// }

// export default OverlayImage
