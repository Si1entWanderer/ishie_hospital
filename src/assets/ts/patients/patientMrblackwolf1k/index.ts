import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientMrblackwolf1k_j: TPatient = {
    id: '28291',
    name: 'mrblackwolf1k_j',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '2.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.streak100],
    registrationDate: 1772236800000,
}
