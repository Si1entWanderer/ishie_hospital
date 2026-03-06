import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import placeholderAvatar from '@/assets/images/avatars/placeholderAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientAkaev1515: TPatient = {
    id: '15208',
    name: 'akaev1515',
    image: placeholderAvatar,
    sex: ESex.male,
    birthDate: '9.12.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1772755200000,
}
