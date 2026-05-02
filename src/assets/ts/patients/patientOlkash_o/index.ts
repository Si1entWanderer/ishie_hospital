import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import olkash_oAvatar from '@/assets/images/avatars/olkash_oAvatar.jpg'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '41631',
    name: 'olkash_o',
    image: olkash_oAvatar,
    sex: ESex.male,
    birthDate: '29.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streak100],
    registrationDate: 1776643200000,
}

export default patient
