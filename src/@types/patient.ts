import type { TTextBlock } from '@/@types/blocks'
import { ESex, ETherapyMarksIds, ETherapyMarksGrades } from '@/assets/ts/enums'

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
    staffExperience?: string
    registrationDate?: number
}

export type TTherapyMark = {
    id: ETherapyMarksIds
    image: string
    name: string
    grade: ETherapyMarksGrades
    description?: string
}
