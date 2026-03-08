import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

export const patientDarkvels: IPatient = {
    id: '65460',
    name: 'darkvels_j',
    image: null,
    sex: ESex.male,
    birthDate: '24.05.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.roulette],
    registrationDate: 1765065600000,
}
