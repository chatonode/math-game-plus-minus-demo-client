import React from "react"
import Level000 from "./levels/FirstLevel"

export enum ELevel {
    LEVEL_000 = 0,
    LEVEL_001 = 1,
    LEVEL_002 = 2,
    LEVEL_003 = 3,
    LEVEL_004 = 4,
    LEVEL_005 = 5,
    LEVEL_006 = 6,
    LEVEL_007 = 7,
    LEVEL_008 = 8,
    LEVEL_009 = 9,
}

// const asd = ELevel.LEVEL_000.toString().padStart(3, '0')


export enum ELevelImageName {
    LEVEL_000 = 'level-000',
    LEVEL_001 = 'level-001',
    LEVEL_002 = 'level-002',
    LEVEL_003 = 'level-003',
    LEVEL_004 = 'level-004',
    LEVEL_005 = 'level-005',
    LEVEL_006 = 'level-006',
    LEVEL_007 = 'level-007',
    LEVEL_008 = 'level-008',
    LEVEL_009 = 'level-009',
}

export type TLevelProps = React.PropsWithChildren & {

    onPrevious: () => void
    onNext: () => void
    readonly myLevel: ELevel
}

export type TFirstLevelProps = Pick<TLevelProps, "myLevel" | "onNext" | "children">
export type TLastLevelProps = Pick<TLevelProps, "myLevel" | "onPrevious" | "children">


