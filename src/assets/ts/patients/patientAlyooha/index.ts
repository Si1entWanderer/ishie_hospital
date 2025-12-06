import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

export const patientAlyooha: TPatient = {
    id: '94108',
    name: 'alyooha',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '11.05.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
}
