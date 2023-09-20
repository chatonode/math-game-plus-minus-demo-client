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

const produceQuestions = (params: Pick<TQuestionParams, "first_number" | "number_to_operate">[]) => {
    const producedQuestions: TQuestionData[] = params.map((param) => {
        const producedQuestion: TQuestionData = {
            id: uuidv4(), //Math.random().toString(),
            title: 'Depodaki Kutulara El At!',
            // first_part: 'Deponda <span>7819</span> adet kutun var. Bugün <span>219</span> kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
            first_part: `Deponda ${param.first_number} adet kutun var. Bugün ${param.number_to_operate} kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?`,
            second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
            success_message: 'Tekrar Tebrikler! Depodaki kutular emin ellerde!',
            params: {
                operation: EOperationType.ADDITION,
                first_number: param.first_number,
                number_to_operate: param.number_to_operate,
                expected_result: param.first_number + param.number_to_operate

            }
        }

        return producedQuestion
    })

    return producedQuestions
}

const DUMMY_QUESTIONS = produceQuestions(
    [
        // {
        //     first_number: 7819,
        //     number_to_operate: 219,
        // },
        // FIRST QUESTION
        {
            first_number: 8675,
            number_to_operate: 46945,
        },
        {
            first_number: 91089,
            number_to_operate: 5121,
        },
        {
            first_number: 54782,
            number_to_operate: 6273,
        },
    ]
)

export default DUMMY_QUESTIONS
