import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import omdfrAvatar from '@/assets/images/avatars/omdfrAvatar.jpg'
import examination1 from './examinations/examination1'

export const patientOmdfr: TPatient = {
    id: '50822',
    name: 'omdfr_j',
    image: omdfrAvatar,
    sex: ESex.male,
    birthDate: '2.03.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
}
