import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import iisusAvatar from '@/assets/images/avatars/iisus.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

export const patientIisus: TPatient = {
    id: '43434',
    name: 'iisus_0001_j',
    image: iisusAvatar,
    sex: ESex.male,
    birthDate: '9.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1, examination2],
}
