import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { initWashList } from './model/form.init';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form',
  imports: [MatButton, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [provideNativeDateAdapter()],
})
export class FormComponent {
  today = new Date();
  washList = signal<WashlistInterface[]>(initWashList);
  selectedWash = signal<WashlistInterface>({
    id: 1,
    washType: 'Tunnel Wash',
    icon: 'local_car_wash',
  });

  selectWashFn(wash: WashlistInterface) {
    this.selectedWash.set(wash);
  }
}
