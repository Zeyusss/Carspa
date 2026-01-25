import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, effect, inject, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatHeaderCellDef,
  MatCellDef,
  MatHeaderRowDef,
  MatRowDef,
} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { CarspaStore } from '../../../core/store/store';
import { MatDialog } from '@angular/material/dialog';
import { AlertModuleComponent } from '../modules/alert-module/alert-module.component';
import { BookingInterface } from '../../../core/models/booking/booking.interface';
import { AppointmentModuleComponent } from '../modules/appointment-module/appointment-module.component';
import { QuickViewComponent } from '../modules/quick-view/quick-view.component';

@Component({
  selector: 'app-table',
  imports: [
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTableModule,
    MatSortModule,
    DatePipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  readonly dialog = inject(MatDialog);
  private readonly store = inject(CarspaStore);

  displayedColumns: string[] = ['id', 'name', 'washType', 'date', 'actions'];

  dataSource = new MatTableDataSource();
  constructor() {
    effect(() => {
      this.dataSource.data = this.store.booking();
    });
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  alertModal(element: BookingInterface) {
    this.dialog.open(AlertModuleComponent, { data: { element } });
  }
  updateModal(element: BookingInterface) {
    this.dialog.open(AppointmentModuleComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: 'auto',
      height: 'auto',
      autoFocus: false,
      data: { element },
    });
  }

  quickViewModal(element: BookingInterface) {
    this.dialog.open(QuickViewComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: 'auto',
      height: 'auto',
      autoFocus: false,
      data: { element },
    });
  }
}
