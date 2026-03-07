import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import younochkqAvatar from '@/assets/images/avatars/younochkqAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientYounochkq: IPatient = {
    id: '57483',
    name: 'younochkq',
    image: younochkqAvatar,
    sex: ESex.female,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал younochkq',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
    registrationDate: 1771632000000,
}
