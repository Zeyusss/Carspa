import { Component, inject } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormComponent } from '../../form/form.component';
import { BookingInterface } from '../../../../core/models/booking/booking.interface';

@Component({
  selector: 'app-appointment-module',
  imports: [FormComponent],
  templateUrl: './appointment-module.component.html',
  styleUrl: './appointment-module.component.css',
})
export class AppointmentModuleComponent {
  data = inject(MAT_DIALOG_DATA) as { element: BookingInterface } | null;
}
