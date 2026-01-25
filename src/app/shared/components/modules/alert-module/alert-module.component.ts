import { BookingInterface } from './../../../../core/models/booking/booking.interface';
import { Component, inject } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CarspaStore } from '../../../../core/store/store';

@Component({
  selector: 'app-alert-module',
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './alert-module.component.html',
  styleUrl: './alert-module.component.css',
})
export class AlertModuleComponent {
  dialog = inject(MatDialogRef<AlertModuleComponent>);
  data = inject(MAT_DIALOG_DATA) as { element: BookingInterface };
  private readonly store = inject(CarspaStore);

  onCancel() {
    this.dialog.close();
  }

  onDelete(id: string) {
    if (!id) return;
    this.store.deleteAppointment(id);
    this.dialog.close();
  }
}
