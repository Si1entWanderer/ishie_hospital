import type { TTextBlock } from "@/@types/blocks";
import { EIcons } from "@/assets/ts/enums";

export const SOCIAL_LINKS = [{
    id: 1,
    name: 'Twitch',
    icon: EIcons.twitch,
    href: '//www.twitch.tv/ishie_j',
}, {
    id: 2,
    name: 'Telegram',
    icon: EIcons.telegram,
    href: '//t.me/durdom_ishie_j',
}]

export const FAQ_TEXTS: TTextBlock[] = [{
    id: 1,
    title: 'КАК ПОПАСТЬ НА&nbsp;ЛЕЧЕНИЕ?',
    description: 'Чтобы попасть на&nbsp;лечение нужно поучаствовать в&nbsp;конкурсах на&nbsp;Twitch канале Ishie_j. С&nbsp;23.11.2025 проходит событие Пукатон, в&nbsp;рамках которого можно получить место в&nbsp;больнице. Для этого нужно во&nbsp;время действия Пукатона стать топ донатером дня.',
}, {
    id: 2,
    title: 'Я&nbsp;СТАЛ ТОП ДОНАТЕРОМ ДНЯ, ЧТО ДАЛЬШЕ?',
    description: 'Если ты&nbsp;выиграл(а) место в&nbsp;больницу, поздравляю, теперь как и&nbsp;в&nbsp;любой больнице немножко бюрократии. Тебе нужно будет в&nbsp;личку Телеграм канала Иши скинуть ник на&nbsp;Twitch, пол(по желанию) и&nbsp;желаемую фотку. Фотка не&nbsp;должна нарушать правила Twitch и&nbsp;законодательство РФ. Это не&nbsp;обязательно должна быть твоя личная фотка, просто картинка которая ассоциируется с&nbsp;тобой. Будет плюсом если ты&nbsp;кадрируешь ее&nbsp;в&nbsp;соотношение 1:1.',
}];
