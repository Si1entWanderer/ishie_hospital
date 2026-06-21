import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '77895',
    name: 'pain_vin',
    image: null,
    sex: ESex.male,
    birthDate: '29.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.clip300],
    registrationDate: 1776643200000,
}

export default patient
