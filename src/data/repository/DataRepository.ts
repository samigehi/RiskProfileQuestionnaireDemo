
import {RemoteRepository} from '@domain';

import {
  LocalDataSource,
  RemoteDataSource,
} from '../data-source';

@injectable()
export class AppRepository implements RemoteRepository {
  constructor(
    @inject('LocalDataSource')
    private readonly localDataSource: LocalDataSource,
    @inject('RemoteDataSource')
    private readonly remoteDataSource: RemoteDataSource,
  ) {}

  // right now hardcoded questionnaires
  getRiskProfileQuestionnaire(): { question: string; options: string[]; points: string[]; }[] {
    return data
  }
}


// hardcoded questionnaires
var data = [
  {
    question: "1. How would you describe your investment knowledge?",
    options: [
      "Novice",
      "Intermediate",
      "Advanced",
    ],
    points: [
      "1",
      "2",
      "3",
    ]
  },
  {
    question: "2. Investment Duration",
    options: [
      "Short-term (less than 1 year)",
      "Medium-term (1-5 years)",
      "Long-term (more than 5 years)",
    ],
    points: [
      "1",
      "2",
      "3",
    ]
  },
  {
    question: "3. How comfortable are you with taking risks?",
    options: [
      "Very risk-averse",
      "Somewhat risk-averse",
      "Neutral Somewhat risk-tolerant",
      "Very risk-tolerant",
    ],
    points: [
      "1",
      "2",
      "3",
      "4",
    ]
  },
  {
    question: "4. What percentage of your income are you willing to invest?",
    options: [
      "Less than 10%",
      "10-25%",
      "25-50%",
      "More than 50%",
    ],
    points: [
      "1",
      "2",
      "3",
      "4",
    ]
  },
  {
    question: "5. How would you react to a sudden drop in the value of your investments?",
    options: [
      "Panic and sell immediately",
      "Monitor closely and consider selling",
      "Hold and wait for recovery",
      "See it as a buying opportunity and invest more",
    ],
    points: [
      "1",
      "2",
      "3",
      "4",
    ]
  },
];
