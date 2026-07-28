import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import m_d_mortonAvatar from '@/assets/images/avatars/m_d_mortonAvatar.jpg'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '54667',
    name: 'm_d_morton',
    image: m_d_mortonAvatar,
    sex: ESex.male,
    birthDate: '4.07.2026',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streakNew],
    registrationDate: 1785196800000,
}

export default patient
