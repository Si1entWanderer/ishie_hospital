import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import misakiAvatar from '@/assets/images/avatars/misakiAvatar.gif'
import { STAFF_NAMES } from '@/assets/ts/constants'
import examination1 from './examinations/examination1'

export const patientMisaki: IPatient = {
    id: '73854',
    name: 'misaki__j',
    image: misakiAvatar,
    sex: ESex.male,
    birthDate: '18.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [
        ETherapyMarksIds.pukaton2025,
        ETherapyMarksIds.streak100,
        ETherapyMarksIds.clip300,
        ETherapyMarksIds.donation3k,
    ],
    staffName: STAFF_NAMES.misaki,
    registrationDate: 1764115200000,
}
