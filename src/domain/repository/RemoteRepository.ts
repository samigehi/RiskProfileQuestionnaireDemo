import {Questionnaire} from '../entity';

export interface RemoteRepository{
  // here return list of Questionnaire >> Questionnaire[]
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[];
}
