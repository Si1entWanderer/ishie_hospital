import type { ITextBlock } from '@/@types/blocks'
<<<<<<< Updated upstream
import type { TCheckboxGroupData } from '@/@types/ui'
import { EIcons, ETherapyMarksIds, ETherapyMarksGrades } from '@/assets/ts/enums'
import type { ITherapyMark } from '@/@types/patient'
=======
import type { TTherapyMark } from '@/@types/patient'
import type { TCheckboxGroupData } from '@/@types/ui'
import { EIcons, ETherapyMarksGrades, ETherapyMarksIds } from '@/assets/ts/enums'
>>>>>>> Stashed changes

import views300Image from '@/assets/images/rewards/clip300.png'
import collectorImage from '@/assets/images/rewards/collector.png'
import donateOptionImage from '@/assets/images/rewards/donation.png'
import rouletteImage from '@/assets/images/rewards/gamble.png'
import pukaton2025Image from '@/assets/images/rewards/pukaton.png'
import raid100Image from '@/assets/images/rewards/raid.png'
import streak100Image from '@/assets/images/rewards/streak.png'

import frameEpicImage from '@/assets/images/frames/epic.png'
import frameLegendaryImage from '@/assets/images/frames/legendary.png'
import frameRareImage from '@/assets/images/frames/rare.png'
import frameUncommonImage from '@/assets/images/frames/uncommon.png'

export const SOCIAL_LINKS = [
    {
        id: 1,
        name: 'Twitch',
        icon: EIcons.twitch,
        href: '//www.twitch.tv/ishie_j',
        fill: '#8956fb',
    },
    {
        id: 2,
        name: 'Telegram',
        icon: EIcons.telegram,
        href: '//t.me/durdom_ishie_j',
        fill: '#0088cc',
    },
]

export const FORM_FIELDS: TCheckboxGroupData[] = [
    {
        pk: 'heartAge',
        label: '❤️‍🔥 I.Возраст сердечка',
        variants: [
            {
                pk: 'newbe',
                label: 'Новичковый ритм',
            },
            {
                pk: 'easyLove',
                label: 'Лёгкая влюблённость',
            },
            {
                pk: 'pulsating',
                label: 'Пульсирующий актив',
            },
            {
                pk: 'chronic',
                label: 'Хронический сердецежитель',
            },
            {
                pk: 'vip',
                label: 'VIP: Любимый Гей',
            },
        ],
    },
    {
        pk: 'mainDiagnosis',
        label: '💗 II. Основной диагноз',
        variants: [
            {
                pk: '1',
                label: 'Аритмия милоты (лёгкая степень)',
            },
            {
                pk: '2',
                label: 'Синдром переполненного сердечка',
            },
            {
                pk: '3',
                label: 'Ишемия нежности (в ремиссии)',
            },
            {
                pk: '4',
                label: 'Доброкачественное увеличение любви',
            },
            {
                pk: '5',
                label: 'Лав-тахикардия I степени',
            },
            {
                pk: '6',
                label: 'Хроническая улыбкоинфекция',
            },
            {
                pk: '7',
                label: 'Синдром «гига гея» (аниме форма)',
            },
            {
                pk: '8',
                label: 'Лихорадка натурала',
            },
            {
                pk: '9',
                label: 'Недостаток обнимашек',
            },
            {
                pk: '10',
                label: 'Ты пися',
            },
        ],
    },
    {
        pk: 'groupOfRisk',
        label: '✨ III. Группа риска',
        variants: [
            {
                pk: '1',
                label: 'ПМЛ — Постоянно Мило Любящий',
            },
            {
                pk: '2',
                label: 'УПС — Уровень Пульса Стойко высокий',
            },
            {
                pk: '3',
                label: 'ОХМ — Ого Как Мило',
            },
            {
                pk: '4',
                label: 'ГЛМ — Готов Любить Много',
            },
            {
                pk: '5',
                label: 'СНС — Скромный Но Симпатичный',
            },
            {
                pk: '6',
                label: 'СБЧ — Слишком Большой Член',
            },
            {
                pk: '7',
                label: 'ГМГ- Гига Мега Гей',
            },
            {
                pk: '8',
                label: 'ОСКП - Ощущение себя котенком - поваренком',
            },
            {
                pk: '9',
                label: 'СМП - Синдром Маленькой Письки',
            },
            {
                pk: '10',
                label: 'ЧТК - Что Такое Какать',
            },
            {
                pk: '11',
                label: 'СЭКС - Слишком Энергичные Колебания Сердца',
            },
            {
                pk: '12',
                label: 'ОГН - Отрицание Гей Натуры',
            },
        ],
    },
    {
        pk: 'symptoms',
        label: '🌸 IV. Симптомы, замеченные врачом',
        variants: [
            {
                pk: '1',
                label: 'Улыбка не проходит более 3 минут',
            },
            {
                pk: '2',
                label: 'Спонтанные «аааа» и «я гей»',
            },
            {
                pk: '3',
                label: 'Неконтролируемый приток эмоций',
            },
            {
                pk: '4',
                label: 'Повышенное сердцебиение в чате',
            },
            {
                pk: '5',
                label: 'Приступная активность в чате',
            },
            {
                pk: '6',
                label: 'Смущённые реакции на позы врача',
            },
            {
                pk: '7',
                label: 'Хроническое пребывание в стриме',
            },
            {
                pk: '8',
                label: 'Большой член в попе',
            },
            {
                pk: '9',
                label: 'Донатная девственность',
            },
            {
                pk: '10',
                label: 'Непрекращающиеся "ПАПА ПЕВА ГЕМАБОДИ ПАПА ПЕВА ДЖЕСАНАВА" в голове',
            },
            {
                pk: '11',
                label: 'Синдром навязчивых грез о членах',
            },
            {
                pk: '12',
                label: 'Криглевидные высыпания на коже',
            },
            {
                pk: '13',
                label: 'Покраснения в области щек при посещении стрима',
            },
            {
                pk: '14',
                label: 'Бредовые идеи о существовании секса',
            },
            {
                pk: '15',
                label: 'Непреодолимая тяга к пиломатериалам',
            },
            {
                pk: '16',
                label: 'Потерянное чувство обаяния',
            },
            {
                pk: '17',
                label: 'Фантомные воспоминания о вымышленной 3Д модели монашки',
            },
            {
                pk: '18',
                label: 'Приступы спонтанного вращения членом',
            },
            {
                pk: '19',
                label: 'Неконтролируемые подсосы к хайповозу',
            },
        ],
    },
    {
        pk: 'therapy',
        label: '💉 V. Назначения врача',
        variants: [
            {
                pk: '1',
                label: 'Выписать одну (1) улыбку ❤️',
            },
            {
                pk: '2',
                label: 'Отдохнуть и попить воды',
            },
            {
                pk: '3',
                label: 'Получить 3 дозы милоты в чате',
            },
            {
                pk: '4',
                label: 'Похвалить врача',
            },
            {
                pk: '5',
                label: 'Провести терапию «понюхать ножки»',
            },
            {
                pk: '6',
                label: 'Совершить доброе действие сегодня',
            },
            {
                pk: '7',
                label: 'Продлить курс таблеток от ишемии',
            },
            {
                pk: '8',
                label: 'Вернуть деньги Мисаки вместо врача',
            },
            {
                pk: '9',
                label: 'Пукнуть под присмотром врача',
            },
            {
                pk: '10',
                label: 'Получить по попи',
            },
            {
                pk: '11',
                label: 'Прогрев связок песней Macan "Подо мной дилдо метров 8"',
            },
            {
                pk: '12',
                label: 'Поставить свое сердечко под пост в тг',
            },
            {
                pk: '13',
                label: 'Пони-терапия - марафон по MLP',
            },
            {
                pk: '14',
                label: 'Анмод',
            },
            {
                pk: '15',
                label: 'Прослушивание ASMR от Иши 1 раз в день перед сном в течение недели',
            },
            {
                pk: '6',
                label: 'Прием гематогенки с ежиком, выпрошенной у мамы(не обязательно своей)',
            },
        ],
    },
    {
        pk: 'cardiacLoad',
        label: '💞 VI. Уровень сердечной нагрузки',
        variants: [
            {
                pk: '1',
                label: 'Уровень 1 — Тёплый Пульс',
            },
            {
                pk: '2',
                label: 'Уровень 2 — Розовое Сердцебиение',
            },
            {
                pk: '3',
                label: 'Уровень 3 — Ускоренная Симпатия',
            },
            {
                pk: '4',
                label: 'Уровень 4 — Гипер-Обожание',
            },
            {
                pk: '5',
                label: 'Уровень 5 — Критическая Влюблённость',
            },
            {
                pk: '6',
                label: 'Уровень MAX — Бьется Даже На Парковке',
            },
        ],
    },
    {
        pk: 'therapyReferral',
        label: '🏥 НАПРАВЛЕНИЕ НА ТЕРАПИЮ',
        variants: [
            {
                pk: '1',
                label: 'Пукатон 2025',
            },
            {
                pk: '2',
                label: 'Ветеран фильмотерапии(стрик 100)',
            },
            {
                pk: '3',
                label: 'Групповая терапия(рейд 100)',
            },
            {
                pk: '4',
                label: 'Сеанс лудомании(рулетка)',
            },
            {
                pk: '5',
                label: 'Клипная лоботомия(300+ просмотров на клипе)',
            },
            {
                pk: '6',
                label: 'Донатотерапия(опция при донате 3к)',
            },
        ],
    },
]

export const FILEDS_DEFAULT_VALUES = Object.fromEntries(FORM_FIELDS.map((field) => [field.pk, []]))

export const LOCALSTORAGE_FORM_KEY = 'ishie_hospital_checkup_data'
export const LOCALSTORAGE_NAME_KEY = 'ishie_hospital_checkup_name'

export const THERAPY_MARKS: ITherapyMark[] = [
    {
        id: ETherapyMarksIds.collector,
        image: collectorImage,
        name: 'Ишемия внутривенно',
        grade: ETherapyMarksGrades.legendary,
        description:
            'Терапия для тех, кого ни перед чем не остановить. Дается за сбор всех жетонов терапии',
    },
    {
        id: ETherapyMarksIds.pukaton2025,
        image: pukaton2025Image,
        name: 'Пукатон 2025',
        grade: ETherapyMarksGrades.legendary,
        description:
            'Терапия для первопроходцев в клинике Иши_j. Дается за получение статуса донатера дня во время Пукатона 2025',
    },
    {
        id: ETherapyMarksIds.streak100,
        image: streak100Image,
        name: 'Ветеран фильмотерапии',
        grade: ETherapyMarksGrades.legendary,
        description:
            'Терапия для тех, кто жить не может без стрима. Дается за серию просмотров 100',
    },
    {
        id: ETherapyMarksIds.raid100,
        image: raid100Image,
        name: 'Групповая терапия',
        grade: ETherapyMarksGrades.epic,
        description:
            'Терапия для тех, кто приходит в компании друзей. Дается за рейд на канал от 100 человек',
    },
    {
        id: ETherapyMarksIds.roulette,
        image: rouletteImage,
        name: 'Сеанс лудомании',
        grade: ETherapyMarksGrades.rare,
        description: 'Терапия для везучих. Может выпасть в рулетке при донате',
    },
    {
        id: ETherapyMarksIds.clip300,
        image: views300Image,
        name: 'Клипная лоботомия',
        grade: ETherapyMarksGrades.rare,
        description:
            'Терапия для тех, кто умеет подобрать кадр. Дается за 300+ просмотров на клипе',
    },
    {
        id: ETherapyMarksIds.donation3k,
        image: donateOptionImage,
        name: 'Донатотерапия',
        grade: ETherapyMarksGrades.uncommon,
        description:
            'Терапия для тех, кто устал от бесплатной медицины. Дается за донат 3 000₽+ с текстом "хочу в клинику"',
    },
]

export const THERAPY_FRAME_BY_GRADE: Record<ETherapyMarksGrades, string> = {
    [ETherapyMarksGrades.legendary]: frameLegendaryImage,
    [ETherapyMarksGrades.epic]: frameEpicImage,
    [ETherapyMarksGrades.rare]: frameRareImage,
    [ETherapyMarksGrades.uncommon]: frameUncommonImage,
}

export const ACTIVE_THERAPIES = [
    ETherapyMarksIds.collector,
    ETherapyMarksIds.streak100,
    ETherapyMarksIds.raid100,
    ETherapyMarksIds.roulette,
    ETherapyMarksIds.clip300,
    ETherapyMarksIds.donation3k,
]

export const TOKENS_PAGE_DATA: ITextBlock = {
    id: 1,
    title: 'КАК ПОПАСТЬ НА&nbsp;ЛЕЧЕНИЕ?',
    description: `
            Чтобы попасть в&nbsp;клинику нужно получить
            достижение на&nbsp;Twitch канале Ishie_j (<b>жетон&nbsp;терапии</b>)
            Список доступных на&nbsp;данный момент достижений:
        `,
}

export const STAFF_NAMES = {
    alyooha: 'Дежурный батя',
    iisus: 'Бог МРТ(мемы, рисунки, ты пися)',
    pitaHavus: 'Собиратель пуков',
    misaki: 'Нейро-терапевт',
    nutvis: 'Boobs inspector',
}

export const MAINPAGE_BUTTON_TEXT = 'На главную'
