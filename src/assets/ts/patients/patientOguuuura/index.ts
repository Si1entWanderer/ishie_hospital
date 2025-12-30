import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientOguuuura: TPatient = {
    id: '70800',
    name: 'oguuuura',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '12.11.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.donation3k],
}
