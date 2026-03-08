import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

export const patientSamr1na: IPatient = {
    id: '85771',
    name: 'samr1na_',
    image: null,
    sex: ESex.female,
    birthDate: '13.07.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
    registrationDate: 1764720000000,
}
