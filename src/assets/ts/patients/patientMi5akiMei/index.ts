import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patientMi5akiMei: IPatient = {
    id: '35384',
    name: 'Mi5akiMei',
    image: null,
    sex: ESex.male,
    birthDate: '12.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
    registrationDate: 1764460800000,
}

export default patientMi5akiMei
