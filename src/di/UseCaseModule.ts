import {container} from 'tsyringe';
import {QuestionnaireUseCase} from '@domain';
import {AppDependencies} from './type';

export function registerUseCase() {
  container.register(AppDependencies.QuestionnaireUseCase, {
    useClass: QuestionnaireUseCase,
  });
}
