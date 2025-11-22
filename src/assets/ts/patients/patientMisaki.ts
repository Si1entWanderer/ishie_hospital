import type { TPatient } from '@/@types/patient'
import { ESex } from '@/assets/ts/enums'

import misakiAvatar from '@/assets/images/avatars/misaki.png'

export const patientMisaki: TPatient = {
    id: '000030',
    name: 'misaki_30cm_j',
    image: misakiAvatar,
    sex: ESex.male,
    birthDate: '9.11.2002',
    residentalAddress: 'Twitch канал Ishie_j',
    examination: [
        {
            id: 1,
            title: 'ДАННЫЕ ОСМОТРА',
            description:
                'Пациент проявляет признаки агрессии. В&nbsp;речи постоянно упомянает какие то&nbsp;деньги, которые ему должны вернуть. Говорит что дружит с&nbsp;Иисусом. В&nbsp;тесте на&nbsp;ориентацию на&nbsp;вопрос &laquo;Вы&nbsp;гей?&raquo; написал &laquo;-&raquo;',
        },
        {
            id: 2,
            title: 'ПРЕДВАРИТЕЛЬНЫЙ ДИАГНОЗ',
            description:
                '<p>Бредовое расстройство</p><p>Расстройство половой идентификации</p><p>Ишемическая болезнь сердца</p>',
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
