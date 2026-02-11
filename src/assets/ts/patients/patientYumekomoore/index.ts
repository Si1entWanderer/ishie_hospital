import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import yumekomooreAvatar from '@/assets/images/avatars/yumekomooreAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientYumekomoore: TPatient = {
    id: '88267',
    name: 'yumekomoore',
    image: yumekomooreAvatar,
    sex: ESex.female,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал yumekomoore',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.raid100],
    registrationDate: 1764633600000,
}
