import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientFullgir_77: IPatient = {
    id: '77632',
    name: 'fullgir_77',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '6.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1771891200000,
}
