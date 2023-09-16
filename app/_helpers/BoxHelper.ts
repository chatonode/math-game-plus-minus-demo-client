
import Box from "../components/UI/InGame/Box"

export const convertFromNumToBoxDigits = (numberValue: number) => {
    const boxArray = Array.from(numberValue.toString()).map(d => [+d]).reverse()

    return boxArray
}

export const convertFromBoxDigitsToNum = (boxDigits: number[][]) => {
    const numberValues = boxDigits.map((bd) => bd[0]).reverse() // [7, 8, 1, 9]

    const numberValue = parseInt(numberValues.join(''))

    return numberValue
}

export const convertFromNumToActiveBoxDigits = (numberValue: number) => {
    const numberValues = Array.from(numberValue.toString()).reverse().map(e => parseInt(e))



    //  // [9, 1, 8, 7]
    //  const activeBoxArray = numberValues.map((numberValue, boxDigit) => {
    //     return <Box />
    //  })



    return numberValues
}
