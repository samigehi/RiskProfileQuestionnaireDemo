
// not implemented - for demo we will use only local source 
export interface RemoteDataSource {
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[];
}

@injectable()
export class RemoteDataSourceImp  implements RemoteDataSource {
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[] {
    return []; //axio/api call to get data from web services
  }
}