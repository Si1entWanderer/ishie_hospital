import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import omdfrAvatar from '@/assets/images/avatars/omdfrAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'
import examination3 from './examinations/examination3'

const patientOmdfr: IPatient = {
    id: '50822',
    name: 'omdfr_died_j',
    image: omdfrAvatar,
    sex: ESex.male,
    birthDate: '2.03.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2, examination3],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.streak100],
    registrationDate: 1764288000000,
}

export default patientOmdfr;