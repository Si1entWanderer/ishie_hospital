import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patientAkaev1515: IPatient = {
    id: '15208',
    name: 'akaev1515',
    image: null,
    sex: ESex.male,
    birthDate: '9.12.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1772755200000,
}

export default patientAkaev1515;