import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import omdfrAvatar from '@/assets/images/avatars/omdfrAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

export const patientOmdfr: TPatient = {
    id: '50822',
    name: 'omdfr_died_j',
    image: omdfrAvatar,
    sex: ESex.male,
    birthDate: '2.03.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
}
