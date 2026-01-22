import { Component } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-appointment-module',
  imports: [FormComponent],
  templateUrl: './appointment-module.component.html',
  styleUrl: './appointment-module.component.css',
})
export class AppointmentModuleComponent {}
