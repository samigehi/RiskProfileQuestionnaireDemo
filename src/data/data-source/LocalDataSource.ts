
export interface LocalDataSource {
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[];

}

@injectable()
export class LocalDataSourceImp  implements LocalDataSource {
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[] {
    return [];
  }
}
