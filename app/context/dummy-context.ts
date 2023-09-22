import { v4 as uuidv4 } from 'uuid'

export enum EOperationType {
    ADDITION = 'addition',
    SUBTRACTION = 'subtraction'
}

type TQuestionParams = {
    operation: EOperationType
    first_number: number
    number_to_operate: number
    expected_result: number
}

export type TQuestionData = {
    id: string
    title: string
    first_part: string
    second_part: string
    success_message: string
    params: TQuestionParams
}

const addNumber = (num1: number, num2: number) => {
    return num1 + num2
}

const subtractNumber = (num1: number, num2: number) => {
    return num1 - num2
}

const produceQuestions = (params: Pick<TQuestionParams, "first_number" | "number_to_operate" | "operation">[]) => {
    const producedQuestions: TQuestionData[] = params.map((param) => {
        let expectedResult = 0
        let questionMessages: Pick<TQuestionData, "first_part" | "second_part" | "success_message"> = {
            first_part: '', // Defaults
            second_part: '',    // to
            success_message: '', // empty string
        }

        if (param.operation === EOperationType.ADDITION) {
            expectedResult = addNumber(param.first_number, param.number_to_operate)

            questionMessages.first_part = `Deponda ${param.first_number} adet kutun var. Bugün ${param.number_to_operate} kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?`
            questionMessages.second_part = 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne bildirir misin?'
            questionMessages.success_message = 'Tekrar Tebrikler! Depodaki kutular emin ellerde!'
        }

        if (param.operation === EOperationType.SUBTRACTION) {
            expectedResult = subtractNumber(param.first_number, param.number_to_operate)

            questionMessages.first_part = `Deponda ${param.first_number} adet kutun var. Bugün bu kutuların ${param.number_to_operate} kadarını şehir dışındaki hangara göndermemiz gerekiyor. Bu kutuları tek tek teslimat bölgesine taşır mısın?`
            questionMessages.second_part = 'Tebrikler! Kutuları teslimat bölgesine başarıyla taşıdın. Şimdi depoda kaç kutu kaldığını yazarak stok müdürüne bildirir misin?'
            questionMessages.success_message = 'Tekrar Tebrikler! Kutuları hangara teslim edilmek üzere yola çıktı!'
        }




        const producedQuestion: TQuestionData = {
            id: uuidv4(),
            title: 'Depodaki Kutulara El At!',
            first_part: questionMessages.first_part,
            second_part: questionMessages.second_part,
            success_message: questionMessages.success_message,
            params: {
                operation: param.operation,
                first_number: param.first_number,
                number_to_operate: param.number_to_operate,
                expected_result: expectedResult // Default: 0 

            }
        }

        return producedQuestion
    })

    return producedQuestions
}

const DUMMY_QUESTIONS = produceQuestions(
    [
        // Addition

        {   // FIRST QUESTION
            first_number: 8675,
            number_to_operate: 46945,
            operation: EOperationType.ADDITION
        },
        {
            first_number: 91089,
            number_to_operate: 5121,
            operation: EOperationType.ADDITION
        },
        {
            first_number: 54782,
            number_to_operate: 6273,
            operation: EOperationType.ADDITION
        },

        // Subtraction
        {
            first_number: 6834,
            number_to_operate: 281,
            operation: EOperationType.SUBTRACTION
        },
        {
            first_number: 45372,
            number_to_operate: 37359,
            operation: EOperationType.SUBTRACTION
        },
        {
            first_number: 77183,
            number_to_operate: 5824,
            operation: EOperationType.SUBTRACTION
        },
    ]
)

export default DUMMY_QUESTIONS
