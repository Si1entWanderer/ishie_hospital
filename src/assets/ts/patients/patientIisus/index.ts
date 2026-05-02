import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import iisusAvatar from '@/assets/images/avatars/iisus.jpg'
import { STAFF_NAMES } from '@/assets/ts/constants'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientIisus: IPatient = {
    id: '43434',
    name: 'ecyc_j',
    image: iisusAvatar,
    sex: ESex.male,
    birthDate: '9.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
    therapyMarks: [
        ETherapyMarksIds.collector,
        ETherapyMarksIds.pukaton2025,
        ETherapyMarksIds.streak100,
        ETherapyMarksIds.roulette,
        ETherapyMarksIds.clip300,
        ETherapyMarksIds.donation3k,
    ],
    staffName: STAFF_NAMES.iisus,
    registrationDate: 1763942400000,
}

export default patientIisus
