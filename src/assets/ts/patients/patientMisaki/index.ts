import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import misakiAvatar from '@/assets/images/avatars/misakiAvatar.gif'
import examination1 from './examinations/examination1'
import { STAFF_NAMES } from '@/assets/ts/constants'

export const patientMisaki: TPatient = {
    id: '73854',
    name: 'misaki__j',
    image: misakiAvatar,
    sex: ESex.male,
    birthDate: '18.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.clip300],
    staffName: STAFF_NAMES.misaki,
    registrationDate: 1764115200000,
}
