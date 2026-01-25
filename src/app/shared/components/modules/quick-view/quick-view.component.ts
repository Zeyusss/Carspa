import { Component, inject } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { BookingInterface } from '../../../../core/models/booking/booking.interface';

@Component({
  selector: 'app-quick-view',
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.css',
})
export class QuickViewComponent {
  data = inject(MAT_DIALOG_DATA) as { element: BookingInterface };
  dialog = inject(MatDialogRef<QuickViewComponent>);
  close() {
    this.dialog.close();
  }
}
