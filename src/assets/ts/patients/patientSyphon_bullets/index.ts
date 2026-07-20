import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import examination1 from './examinations/examination1'

const patient: IPatient = {
    id: '67443',
    name: 'syphon_bullets',
    image: null,
    sex: ESex.male,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал syphon_bullets',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
    registrationDate: 1784505600000,
}

export default patient
