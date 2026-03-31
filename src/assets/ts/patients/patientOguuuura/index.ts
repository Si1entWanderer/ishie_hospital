import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patientOguuuura: IPatient = {
    id: '70800',
    name: 'oguuuura',
    image: null,
    sex: ESex.male,
    birthDate: '12.11.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.donation3k],
    registrationDate: 1766966400000,
}

export default patientOguuuura
