import type { IPatient } from '@/@types/patient'
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums'

import dreamdelAvatar from '@/assets/images/avatars/dreamdelAvatar.jpg'
import examination1 from './examinations/examination1'

const patientDreamdel: IPatient = {
    id: '36316',
    name: 'Dreamdel_j',
    image: dreamdelAvatar,
    sex: ESex.male,
    birthDate: '13.12.2024',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.pukaton2025],
    registrationDate: 1764979200000,
}

export default patientDreamdel
