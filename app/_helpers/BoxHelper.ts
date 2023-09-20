

export const convertFromNumTo2DBoxDigits = (numberValue: number) => {
    const boxArray = Array.from(numberValue.toString()).map(d => [+d]).reverse()

    return boxArray
}

export const convertFromNumTo1DBoxDigits = (numberValue: number, totalValue: number) => {
    // Rather than using for i=0; i<totalNumberOfDigits; ...
    const loopingArrayTotalNumberOfDigits = Array.from(totalValue.toString())

    const numbersValues = Array.from(numberValue.toString()).map(d => +d).reverse()

    const numberValuesWithPlaceholders = loopingArrayTotalNumberOfDigits.map((_, numberOfDigit: number) => {

        const doNumbersHaveLessDigits = numberOfDigit <= numbersValues.length - 1

        if (doNumbersHaveLessDigits) {
            const currentDigit = numbersValues[numberOfDigit].toString()
            // console.log(currentDigit)
            return currentDigit
        }

        // Else
        return '0'    // annoying
    })

    return numberValuesWithPlaceholders
}


export const convertFrom1DBoxDigitsToNum = (boxDigits: number[][]) => {
    const numberValues = boxDigits.map((bd) => bd[0]).reverse() // [7, 8, 1, 9]
    const numberValue = parseInt(numberValues.join(''))

    return numberValue
}



// export const getClicksLeft = (currentTotal: number, boxDigit: number) => {
//     const currentTotals = Array.from(currentTotal.toString()).reverse()


//     const clicksLeft = currentTotals.find((e, i) => {
//         console.log('i', i, '   ', 'boxDigit', boxDigit)
//         // if (i !== boxDigit) {
//         //     return // early
//         // }

//         return i !== boxDigit
//     })

//     console.log('clicksLeftHelper', clicksLeft)


//     return parseInt(clicksLeft as string)
// }
