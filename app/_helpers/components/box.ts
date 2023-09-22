import { EBoxScore } from "@/app/components/UI/InGame/Box"

import box1Image from '@/public/assets/images/boxes/box1.png'
import box10Image from '@/public/assets/images/boxes/box10.png'
import box100Image from '@/public/assets/images/boxes/box100.png'
import box1000Image from '@/public/assets/images/boxes/box1000.png'
import box10000Image from '@/public/assets/images/boxes/box10000.png'
import box100000Image from '@/public/assets/images/boxes/box100000.png'

export const getBackgroundImage = (score: EBoxScore) => {
    let backgroundImage
    // let backgroundColor

    switch (score) {
        case EBoxScore.BRONZE:
            backgroundImage = `url(${box1Image.src})`
            // backgroundColor = '#a05822'
            break
        case EBoxScore.SILVER:
            backgroundImage = `url(${box10Image.src})`
            // backgroundColor = '#bec7c7'
            break
        case EBoxScore.GOLD:
            backgroundImage = `url(${box100Image.src})`
            // backgroundColor = '#d6c372'
            break
        case EBoxScore.DIAMOND:
            backgroundImage = `url(${box1000Image.src})`
            // backgroundColor = '#effffe'
            break
        case EBoxScore.PLATINIUM:
            backgroundImage = `url(${box10000Image.src})`
            // backgroundColor = '#e5e4e2'
            break
        case EBoxScore.LEGENDARY:
            backgroundImage = `url(${box100000Image.src})`
            // backgroundColor = '#543242'
            break
        default:
            backgroundImage = 'unset'
            break
    }

    return backgroundImage
}
