import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import Mi5akiMeiAvatar from '@/assets/images/avatars/Mi5akiMeiAvatar.jpg'

import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

const patientMi5akiMei: IPatient = {
    id: '35384',
    name: 'Mi5akiMei',
    image: Mi5akiMeiAvatar,
    sex: ESex.male,
    birthDate: '12.12.2024',
    residentalAddress: 'Twitch канал vior_j',
    examinations: [examination1, examination2],
    therapyMarks: [ETherapyMarksIds.pukaton2025, ETherapyMarksIds.streakNew],
    registrationDate: 1764460800000,
}

export default patientMi5akiMei
