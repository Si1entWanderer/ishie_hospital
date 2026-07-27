import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientDarkvels: IPatient = {
    id: '65460',
    name: 'darkvels_j',
    image: null,
    sex: ESex.male,
    birthDate: '24.05.2025',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1, examination2],
    therapyMarks: [
        ETherapyMarksIds.pukaton2025,
        ETherapyMarksIds.roulette,
        ETherapyMarksIds.streakNew,
    ],
    registrationDate: 1765065600000,
}

export default patientDarkvels
