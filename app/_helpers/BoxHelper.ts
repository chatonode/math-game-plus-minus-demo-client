
import Box from "../components/UI/InGame/Box"

export const convertFromNumTo2DBoxDigits = (numberValue: number) => {
    const boxArray = Array.from(numberValue.toString()).map(d => [+d]).reverse()

    // console.log(numberValue, 'BOX ARRAY: ', boxArray)

    return boxArray
}

export const convertFromNumTo1DBoxDigits = (numberValue: number, totalValue: number) => {
    console.log('HEEEY:', numberValue, totalValue)

    // Rather than using for i=0; i<totalNumberOfDigits; ...
    const loopingArrayTotalNumberOfDigits = Array.from(totalValue.toString())


    console.log('HELPER FIRST: ', loopingArrayTotalNumberOfDigits.length)

    const numbersValues = Array.from(numberValue.toString()).map(d => +d).reverse()

    console.log('HELPER BEFORE: ', numbersValues)

    const numberValuesWithPlaceholders = loopingArrayTotalNumberOfDigits.map((_, numberOfDigit: number) => {

        const doNumbersHaveLessDigits = numberOfDigit <= numbersValues.length-1 

        console.log('trueMUUUUU: ',  numberOfDigit, '<=',  numbersValues.length-1, '>>>', doNumbersHaveLessDigits)

        if (doNumbersHaveLessDigits) {
            const currentDigit = numbersValues[numberOfDigit].toString()
            console.log(currentDigit)
            return currentDigit
        }

        console.log('Am i really executing also here?')

        // Else
        return '0'    // annoying
    })


    console.log('HELPER AFTER: ', numberValuesWithPlaceholders)
    console.log('LENGTH AFTER: ', numberValuesWithPlaceholders.length)


    return numberValuesWithPlaceholders
}


export const convertFrom1DBoxDigitsToNum = (boxDigits: number[][]) => {
    const numberValues = boxDigits.map((bd) => bd[0]).reverse() // [7, 8, 1, 9]

    const numberValue = parseInt(numberValues.join(''))

    return numberValue
}

// export const convertFromNumToActiveBoxDigits = (numberValue: number) => {
//     const numberValues = Array.from(numberValue.toString()).reverse().map(e => parseInt(e))



//     //  // [9, 1, 8, 7]
//     //  const activeBoxArray = numberValues.map((numberValue, boxDigit) => {
//     //     return <Box />
//     //  })



//     return numberValues
// }

// TODOOOO
export const getClicksLeft = (currentTotal: number, boxDigit: number) => {
    const currentTotals = Array.from(currentTotal.toString()).reverse()


    const clicksLeft = currentTotals.find((e, i) => {
        console.log('i', i, '   ', 'boxDigit', boxDigit)
        // if (i !== boxDigit) {
        //     return // early
        // }

        return i !== boxDigit
    })

    console.log('clicksLeftHelper', clicksLeft)


    return parseInt(clicksLeft as string)
}
