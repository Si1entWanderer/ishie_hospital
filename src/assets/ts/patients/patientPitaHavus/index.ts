import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import pitaHavusAvatar from '@/assets/images/avatars/pitaHavusAvatar.jpg'
import { STAFF_NAMES } from '@/assets/ts/constants'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

export const patientPitaHavus: TPatient = {
    id: '83578',
    name: 'pitaHavus_j',
    image: pitaHavusAvatar,
    sex: ESex.male,
    birthDate: '30.03.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.clip300, ETherapyMarksIds.roulette],
    staffName: STAFF_NAMES.pitaHavus,
}
