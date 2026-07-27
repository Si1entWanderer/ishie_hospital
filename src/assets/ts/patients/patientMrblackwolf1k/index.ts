import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import mrblackwolf1kAvatar from '@/assets/images/avatars/mrblackwolf1kAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientMrblackwolf1k_j: IPatient = {
    id: '28291',
    name: 'mrblackwolf1k_j',
    image: mrblackwolf1kAvatar,
    sex: ESex.male,
    birthDate: '2.12.2024',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.streak100, ETherapyMarksIds.streakNew],
    registrationDate: 1772236800000,
}

export default patientMrblackwolf1k_j
