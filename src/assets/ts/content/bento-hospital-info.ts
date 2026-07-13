import type { IBentoLink } from '@/@types/bento'
import type { ITextBlock } from '@/@types/blocks'
import { SOCIAL_LINKS } from '@/assets/ts/constants'
import { EIcons } from '@/assets/ts/enums'

import links from '@/assets/ts/links'

export const ABOUT_BLOCK: ITextBlock = {
    id: 1,
    title: 'О КЛИНИКЕ',
    description: `
        <p>
            <b>Клиника vior_j</b>&nbsp;&mdash; это место, куда попадают подписчики
            за&nbsp;получение определенных достижений на&nbsp;канале.
            При выполнении условий, вы&nbsp;получаете <b>жетон терапии</b>,
            который добавляется в&nbsp;вашу карточку. После этого терапия считается
            пройденной.
        </p>
        <p>
            При получении первого <b>жетона терапии</b> Виор заводит вашу карточку,
            ставит диагноз и&nbsp;назначает лечение.
        </p>
        <p>
            По&nbsp;своему усмотрению Виор может позже добавить вам новое обследование
        </p>
        <p>
            <a href="${links.tokens}">
                Все жетоны терапии →
            </a>
        </p>
    `,
}

export const LINKS_BLOCK: IBentoLink[] = [
    {
        id: 1,
        label: 'Пациенты',
        href: links.patients,
        icon: EIcons.personHeart,
    },
    {
        id: 2,
        label: 'Чекап',
        href: links.checkup,
        icon: EIcons.editDocument,
    },
    {
        id: 3,
        label: 'Терапии',
        href: links.tokens,
        icon: EIcons.cup,
    },
    {
        id: 4,
        label: 'Правила',
        href: links.rules,
        icon: EIcons.rules,
    },
]

export const ABOUT_DOCTOR_BLOCKS: ITextBlock[] = [
    {
        id: 1,
        title: 'ОБ VIOR_J',
        description: `
            <p>🩵Я обычный стример. НЕ кролик. НЕ киса. НЕ аниме девочка</p>
            <p>Просто скрываю свое больное еъало</p>
            <p>🩵Можешь звать меня Виор, Виа или Валера. Старички могут звать меня Иши</p>
            <p>🩵Я не люблю играть в игры на стриме, но готова создавать для вас комфорт🩵</p>
        `,
    },
    {
        id: 2,
        title: 'КОГДА ПРОХОДЯТ СТРИМЫ',
        description: `Актуальное расписание можно найти в <a href="${SOCIAL_LINKS[1]?.href}" target="_blank">телеграм-канале.</a>`,
    },
]
