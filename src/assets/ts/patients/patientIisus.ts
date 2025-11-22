import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import iisusAvatar from '@/assets/images/avatars/iisus.jpg'

export const patientIisus: TPatient = {
    id: '000001',
    name: 'iisus_0001_j',
    image: iisusAvatar,
    sex: ESex.male,
    birthDate: '9.01.2025',
    residentalAddress: 'Twitch канал Ishie_j',
    examination: [
        {
            id: 1,
            title: 'ДАННЫЕ ОСМОТРА',
            description:
                'Пациент считает себя богом, просит обращаться к нему не иначе как Иисус. Имеет многочисленные ожоги рук',
        },
        {
            id: 2,
            title: 'ПРЕДВАРИТЕЛЬНЫЙ ДИАГНОЗ',
            description:
                '<p>Бредовое расстройство</p><p>Ожоги 2 степени</p><p>Ишемическая болезнь сердца</p>',
        },
        {
            id: 3,
            title: 'НАЗНАЧЕННОЕ ЛЕЧЕНИЕ',
            description: `
            <ol>
                <li>Пресс качат</li>
                <li>Бегит</li>
                <li>Турник</li>
                <li>Анжумания</li>
                <li>Чай с&nbsp;жасмином пит</li>
                <li>Себя любит</li>
                <li>Успокаивающее видео смотрет</li>
            </ol>
        `,
        },
    ],
}
