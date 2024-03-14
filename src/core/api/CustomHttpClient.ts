
import {RemoteException} from '../error';

// here we will define and implement custom http client - generally i prefer axios
// the purpose of cutom http-client is later we can change dependency / implementation and it will no impact on any other module.
export interface CustomHttpClient {

  post<T>(url: string, data: any): any;
  
  get<T>(url: string): any;

  
  put<T>(url: string, data: any): any;

  delete<T>(url: string): any;
}
 