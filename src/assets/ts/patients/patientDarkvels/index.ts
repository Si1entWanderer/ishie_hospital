import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientDarkvels: TPatient = {
    id: '65460',
    name: 'darkvels_j',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '24.05.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
}
