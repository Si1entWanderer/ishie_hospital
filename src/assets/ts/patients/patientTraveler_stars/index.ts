import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '41368',
    name: 'traveler_stars',
    image: null,
    sex: ESex.male,
    birthDate: '4.07.2026',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streakNew],
    registrationDate: 1785110400000,
}

export default patient
