import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentModuleComponent } from '../../../../shared/components/modules/appointment-module/appointment-module.component';

@Component({
  selector: 'app-home-main',
  imports: [TableComponent, MatButton, MatIcon],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css',
})
export class HomeMainComponent {
  readonly dialog = inject(MatDialog);

  appointmentModule() {
    this.dialog.open(AppointmentModuleComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: 'auto',
      height: 'auto',
      autoFocus: false,
    });
  }
}
