import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

export const patientPlanek21: IPatient = {
    id: '13518',
    name: 'planek21',
    image: null,
    sex: ESex.male,
    birthDate: '15.08.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.donation3k],
    registrationDate: 1771632000000,
}
