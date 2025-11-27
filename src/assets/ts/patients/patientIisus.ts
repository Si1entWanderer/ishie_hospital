import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import iisusAvatar from '@/assets/images/avatars/iisus.jpg'

export const patientIisus: TPatient = {
    id: '43434',
    name: 'iisus_0001_j',
    image: iisusAvatar,
    sex: ESex.male,
    birthDate: '9.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examination: [
        {
            id: 1,
            title: '❤️‍🔥 I.Возраст сердечка',
            description: `
                <p>VIP: Любимый Гей</p>
            `,
        },
        {
            id: 2,
            title: '💗 II. Основной диагноз',
            description: `
                <p>Синдром «гига гея» (аниме форма)</p>
                <p>Ты пися</p>
            `,
        },
        {
            id: 3,
            title: '✨ III. Группа риска',
            description: `
                <p>ГЛМ — Готов Любить Много</p>
                <p>ГМГ- Гига Мега Гей</p>
        `,
        },
        {
            id: 4,
            title: '🌸 IV. Симптомы, замеченные врачом',
            description: `
                <ol>
                    <li>Хроническое пребывание в стриме</li>
                    <li>Большой член в попе</li>
                </ol>
            `,
        },
        {
            id: 5,
            title: '💉 V. Назначения врача',
            description: `
                <ol>
                    <li>Отдохнуть и попить воды</li>
                    <li>Вернуть деньги Мисаки вместо врача</li>
                </ol>
            `,
        },
        {
            id: 6,
            title: '💞 VI. Уровень сердечной нагрузки',
            description: `
                <p>Уровень MAX — Бьется Даже На Парковке</p>
            `,
        },
    ],
}
