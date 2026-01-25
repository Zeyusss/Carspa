import { LocalStorageUtil } from './../../../shared/utils/localStorage/localstorage-util';
import { carspaData } from '../../../shared/data/dumpData';
import { carspaStoreInterface } from './store.interface';

export const STORAGE_KEY = 'storage_app_v1';

export const initStore: carspaStoreInterface = {
  booking: LocalStorageUtil.load(STORAGE_KEY, carspaData),
};
