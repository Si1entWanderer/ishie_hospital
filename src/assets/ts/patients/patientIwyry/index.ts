import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import iwyryAvatar from '@/assets/images/avatars/iwyryAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientIwyry: TPatient = {
    id: '16232',
    name: 'iwyry',
    image: iwyryAvatar,
    sex: ESex.female,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал iwyry',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
}
