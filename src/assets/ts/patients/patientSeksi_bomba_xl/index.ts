import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import seksi_bomba_xlAvatar from '@/assets/images/avatars/seksi_bomba_xlAvatar.jpg'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '28058',
    name: 'seksi_bomba_xl',
    image: seksi_bomba_xlAvatar,
    sex: ESex.male,
    birthDate: '4.07.2026',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streakNew],
    registrationDate: 1785110400000,
}

export default patient
