import {container} from 'tsyringe';
import {LocalDataSource, LocalDataSourceImp, RemoteDataSourceImp} from '@data';
import {AppDependencies} from './type';

export function registerRepositoryDependencies() {
  container.register(AppDependencies.DataRepository, {
    useClass: LocalDataSourceImp,
  });
  container.register(AppDependencies.DataRepository, {
    useClass: RemoteDataSourceImp,
  });
}
