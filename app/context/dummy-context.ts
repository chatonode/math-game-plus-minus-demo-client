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

const DUMMY_QUESTIONS: TQuestionData[] = [
    {
        id: Math.random().toString(),
        title: 'Depodaki Kutulara El At!',
        first_part: 'Deponda 7819 adet kutun var. Bugün 219 kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
        second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
        success_message: 'Tekrar Tebrikler! Depodaki kutular emin ellerde!',
        params: {
            operation: EOperationType.ADDITION,
            first_number: 7819,
            number_to_operate: 219,
            expected_result: 7819 + 219

        }
    },
    {
        id: Math.random().toString(),
        title: 'Depodaki Kutulara El At!',
        first_part: 'Deponda 6372 adet kutun var. Bugün 723 kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
        second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
        success_message: 'Tekrar Tebrikler! Depodaki kutular emin ellerde!',
        params: {
            operation: EOperationType.ADDITION,
            first_number: 6372,
            number_to_operate: 723,
            expected_result: 6372 + 723

        }
    },
    {
        id: Math.random().toString(),
        title: 'Depodaki Kutulara El At!',
        first_part: 'Deponda 2547 adet kutun var. Bugün 6543 kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
        second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
        success_message: 'Tekrar Tebrikler! Depodaki kutular emin ellerde!',
        params: {
            operation: EOperationType.ADDITION,
            first_number: 2547,
            number_to_operate: 6543,
            expected_result: 2547 + 6543

        }
    },
    {
        id: Math.random().toString(),
        title: 'Depodaki Kutulara El At!',
        first_part: 'Deponda 5328843 adet kutun var. Bugün 877877 kutu daha sipariş geldi. Bu kutuları depona eksiksizce yerleştirir misin?',
        second_part: 'Tebrikler! Kutuları depoya başarıyla yerleştirdin. Şimdi deponda kaç kutu olduğunu yazarak stok müdürüne gönderir misin?',
        success_message: 'Tekrar Tebrikler! Depodaki kutular emin ellerde!',
        params: {
            operation: EOperationType.ADDITION,
            first_number: 5328843,
            number_to_operate: 877877,
            expected_result: 5328843 + 877877

        }
    },
]

export default DUMMY_QUESTIONS
