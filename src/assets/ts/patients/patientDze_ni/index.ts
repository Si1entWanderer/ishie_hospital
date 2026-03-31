import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import Dze_niAvatar from '@/assets/images/avatars/Dzen_NiAvatar.jpg'
import examination1 from './examinations/examination1'

const patientDze_ni: IPatient = {
    id: '15794',
    name: 'Dze_Ni',
    image: Dze_niAvatar,
    sex: ESex.male,
    birthDate: '[ДАННЫЕ УДАЛЕНЫ]',
    residentalAddress: 'Twitch канал Dze_Ni',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.raid100],
    registrationDate: 1767225600000,
}

export default patientDze_ni
