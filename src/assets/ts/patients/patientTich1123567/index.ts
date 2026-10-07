import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '48392',
    name: 'tich1123567',
    image: null,
    sex: ESex.male,
    birthDate: '19.09.2026',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.clip300],
    registrationDate: 1791331200000,
}

export default patient
