import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientYounochkq: TPatient = {
    id: '57483',
    name: 'younochkq',
    image: placeholderAvatar,
    sex: ESex.female,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал younochkq',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
    registrationDate: 1771632000000,
}
