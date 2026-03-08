import type { ITextBlock } from '@/@types/blocks'
import { ESex, ETherapyMarksIds, ETherapyMarksGrades } from '@/assets/ts/enums'

export interface IPatient {
    id: string
    name: string
    image: string | null
    sex?: ESex
    birthDate?: string
    residentalAddress?: string
    examination?: ITextBlock[]
    examinations?: ITextBlock[][]
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
