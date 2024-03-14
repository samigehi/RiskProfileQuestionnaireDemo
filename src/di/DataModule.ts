import {container} from 'tsyringe';
import {
  LocalDataSourceImp,
  RemoteDataSourceImp,
} from '@data';
import {QuestionnaireUseCase} from '@domain';
import {} from '@core';
import {AppDependencies} from './type';

export function registerDataDependencies() {
  container.register(AppDependencies.ApiProvider, {
    useValue: new LocalDataSourceImp(),
  });
  container.register(AppDependencies.RemoteDataSource, {
    useClass: RemoteDataSourceImp,
  });

  container.register(AppDependencies.ApiProvider, {
    useClass: AppDependencies,
  });

  container.register(AppDependencies.QuestionnaireUseCase, {
    useClass: QuestionnaireUseCase,
  });
}
