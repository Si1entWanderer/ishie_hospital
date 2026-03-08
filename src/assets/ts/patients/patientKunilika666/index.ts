import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import kunilika666Avatar from '@/assets/images/avatars/kunilika666Avatar.jpg'
import examination1 from './examinations/examination1'

export const patientKunilika666: IPatient = {
    id: '82762',
    name: 'kunilika666',
    image: kunilika666Avatar,
    sex: ESex.female,
    birthDate: '21.06.2025',
    residentalAddress: 'Twitch канал kunilika666',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1767052800000,
}
