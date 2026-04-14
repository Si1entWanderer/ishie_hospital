import type { IPatient } from '@/@types/patient';
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums';

import examination1 from './examinations/examination1';

const patient: IPatient = {
    id: '18074',
    name: 'BOrealweiSS',
    image: null,
    sex: ESex.male,
    birthDate: '27.02.2026',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1776124800000,
}


export default patient;