import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initStore, STORAGE_KEY } from './model/store.init';
import { BookingInterface } from '../models/booking/booking.interface';
import { LocalStorageUtil } from '../../shared/utils/localStorage/localstorage-util';
import { computed } from '@angular/core';

export const CarspaStore = signalStore(
  { providedIn: 'root' },
  withState(initStore),
  withComputed((store) => ({
    capacity: computed(() => store.booking().length < 10),
    listCount: computed(() => store.booking().length),
  })),
  withMethods((store) => ({
    addAppointment(appointment: BookingInterface) {
      const updated = [...store.booking(), appointment];
      patchState(store, { booking: updated });
      LocalStorageUtil.save(STORAGE_KEY, updated);
    },
    deleteAppointment(id: string) {
      if (!id) return;
      const updated = store.booking().filter((item) => item.id !== id);
      patchState(store, { booking: updated });
      LocalStorageUtil.save(STORAGE_KEY, updated);
    },
    updateAppointment(id: string, appointment: BookingInterface) {
      const updated = store
        .booking()
        .map((item) => (item.id === id ? { ...item, ...appointment } : item));
      patchState(store, { booking: updated });
      LocalStorageUtil.save(STORAGE_KEY, updated);
    },
  })),
);
