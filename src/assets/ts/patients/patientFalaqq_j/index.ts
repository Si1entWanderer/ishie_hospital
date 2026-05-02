import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import falaqq_jAvatar from '@/assets/images/avatars/falaqq_jAvatar.jpg'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '77154',
    name: 'falaqq_j',
    image: falaqq_jAvatar,
    sex: ESex.male,
    birthDate: '16.04.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streak100],
    registrationDate: 1776297600000,
}

export default patient
