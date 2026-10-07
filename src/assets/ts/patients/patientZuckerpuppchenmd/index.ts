import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import avatar from '@/assets/images/avatars/ZuckerpuppchenmdAvatar.jpg'
import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '76736',
    name: 'Zuckerpuppchenmd',
    image: avatar,
    sex: ESex.female,
    birthDate: '7.10.2026',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.donation3k],
    registrationDate: 1791331200000,
}

export default patient
