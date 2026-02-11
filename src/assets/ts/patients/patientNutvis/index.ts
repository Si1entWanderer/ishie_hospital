import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import nutvisAvatar from '@/assets/images/avatars/nutvisAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'
import { STAFF_NAMES } from '@/assets/ts/constants'

export const patientNutvis: TPatient = {
    id: '93608',
    name: 'nutvismunt_j',
    image: nutvisAvatar,
    sex: ESex.female,
    birthDate: '12.11.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.clip300],
    staffName: STAFF_NAMES.nutvis,
    registrationDate: 1764115200000,
}
