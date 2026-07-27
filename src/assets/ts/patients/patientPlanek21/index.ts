import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientPlanek21: IPatient = {
    id: '13518',
    name: 'planek_j',
    image: null,
    sex: ESex.male,
    birthDate: '15.08.2025',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.donation3k, ETherapyMarksIds.streakNew],
    registrationDate: 1771632000000,
}

export default patientPlanek21
