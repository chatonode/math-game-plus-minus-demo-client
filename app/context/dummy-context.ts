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
    params: TQuestionParams
}

const DUMMY_QUESTIONS: TQuestionData[] = [
    {
        id: Math.random().toString(),
        title: 'Depodaki Kutulara El At!',
        first_part: 'Deponda 7819 adet kutun var. Bugün 219 kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
        second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
        params: {
            operation: EOperationType.ADDITION,
            first_number: 7819,
            number_to_operate: 219,
            expected_result: 7819 + 219

        }
    },
]

export default DUMMY_QUESTIONS
