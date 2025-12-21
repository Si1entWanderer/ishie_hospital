import type { TTextBlock } from '@/@types/blocks'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

export type TPatient = {
    id: string
    name: string
    image: string
    sex?: ESex
    birthDate?: string
    residentalAddress?: string
    examination?: TTextBlock[]
    examinations?: TTextBlock[][]
    therapyMarks?: ETherapyMarksIds[]
    staffName?: string
}

export type TTherapyMark = {
    id: ETherapyMarksIds
    image: string
    name: string
    description?: string
}
