import type { TPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import lis_7eteAvatar from '@/assets/images/avatars/lis_7eteAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientLis_7ete: TPatient = {
    id: '99843',
    name: 'Lis_7ete',
    image: lis_7eteAvatar,
    sex: ESex.male,
    birthDate: '16.10.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
}
