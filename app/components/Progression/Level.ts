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
    LEVEL_008 = 8,
    LEVEL_009 = 9,
    LEVEL_010 = 10,

    // Mitro
    LEVEL_011 = 11,

    // Subtraction
    LEVEL_012 = 12,
    LEVEL_013 = 13,
    LEVEL_014 = 14,
    LEVEL_015 = 15,
    LEVEL_016 = 16,
    LEVEL_017 = 17,

    // Outro
    LEVEL_018 = 18,
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
    LEVEL_008 = 'level-008',
    LEVEL_009 = 'level-009',
    LEVEL_010 = 'level-010',

    // Mitro
    LEVEL_011 = 'level-011',

    // Subtraction
    LEVEL_012 = 'level-012',
    LEVEL_013 = 'level-013',
    LEVEL_014 = 'level-014',
    LEVEL_015 = 'level-015',
    LEVEL_016 = 'level-016',
    LEVEL_017 = 'level-017',

    // Outro
    LEVEL_018 = 'level-018',
}

export type TLevelProps = React.PropsWithChildren & {

    onPrevious: () => void
    onNext: () => void
    readonly myLevel: ELevel
}

export type TFirstLevelProps = Pick<TLevelProps, "myLevel" | "onNext" | "children">
export type TLastLevelProps = Pick<TLevelProps, "myLevel" | "onPrevious" | "children">


