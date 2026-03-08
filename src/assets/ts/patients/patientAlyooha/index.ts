import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

import { STAFF_NAMES } from '@/assets/ts/constants'

export const patientAlyooha: IPatient = {
    id: '94108',
    name: 'alyooha',
    image: null,
    sex: ESex.male,
    birthDate: '11.05.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
    staffName: STAFF_NAMES.alyooha,
    staffExperience: '3 года',
    registrationDate: 1763856000000,
}
