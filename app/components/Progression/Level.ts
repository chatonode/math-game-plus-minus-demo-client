import React from "react"

export enum ELevel {
    // Intro
    LEVEL_000 = 0,
    LEVEL_001 = 1,
    LEVEL_002 = 2,
    LEVEL_003 = 3,
    LEVEL_004 = 4,

    // Addition
    LEVEL_005 = 5,
    LEVEL_006 = 6,
    LEVEL_007 = 7,

    // Mitro
    LEVEL_008 = 8,

    // Subtraction
    LEVEL_009 = 9,
    LEVEL_010 = 10,
    LEVEL_011 = 11,

    // Outro
    LEVEL_012 = 12,
}

enum ELevelImageName {
    // Intro
    LEVEL_000 = 'level-000',
    LEVEL_001 = 'level-001',
    LEVEL_002 = 'level-002',
    LEVEL_003 = 'level-003',
    LEVEL_004 = 'level-004',

    // Addition
    LEVEL_005 = 'level-005',
    LEVEL_006 = 'level-006',
    LEVEL_007 = 'level-007',

    // Mitro
    LEVEL_008 = 'level-008',

    // Subtraction
    LEVEL_009 = 'level-009',
    LEVEL_010 = 'level-010',
    LEVEL_011 = 'level-011',

    // Outro
    LEVEL_012 = 'level-012',
}

export type TLevelProps = React.PropsWithChildren & {

    onPrevious: () => void
    onNext: () => void
    readonly myLevel: ELevel
}

export type TFirstLevelProps = Pick<TLevelProps, "myLevel" | "onNext" | "children">
export type TLastLevelProps = Pick<TLevelProps, "myLevel" | "children"> & {
    resultTime: number
}


