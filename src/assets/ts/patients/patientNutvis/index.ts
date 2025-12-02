import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import nutvisAvatar from '@/assets/images/avatars/nutvisAvatar.jpg'
import examination1 from './examinations/examination1'
import examination2 from './examinations/examination2'

export const patientNutvis: TPatient = {
    id: '93608',
    name: 'nutvismunt_j',
    image: nutvisAvatar,
    sex: ESex.female,
    birthDate: '12.11.2023',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [
        examination1,
        examination2
    ],
}
