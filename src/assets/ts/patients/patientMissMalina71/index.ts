import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'
import avatar from '@/assets/images/avatars/MissMalina71Avatar.jpg'

const patient: IPatient = {
    id: '15529',
    name: 'MissMalina71',
    image: avatar,
    sex: ESex.female,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал MissMalina71',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
    registrationDate: 1792022400000,
}

export default patient
