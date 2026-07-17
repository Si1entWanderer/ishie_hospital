import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import lis_7eteAvatar from '@/assets/images/avatars/lis_7eteAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientLis_7ete: IPatient = {
    id: '99843',
    name: 'Lis_7ete',
    image: lis_7eteAvatar,
    sex: ESex.male,
    birthDate: '16.10.2025',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.streak100],
    registrationDate: 1766620800000,
}

export default patientLis_7ete
