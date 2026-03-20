import type { IPatient } from '@/@types/patient';
import { ESex, ETherapyMarksIds } from '@/assets/ts/enums';

import examination1 from './examinations/examination1';

const patient: IPatient = {
    id: '38592',
    name: 'MindBlownWhat',
    image: null,
    sex: ESex.male,
    birthDate: '20.03.2026',
    residentalAddress: 'Twitch канал Ishie_j',
    examinations: [examination1],
    therapyMarks: [ETherapyMarksIds.roulette],
    registrationDate: 1773964800000,
}


export default patient;