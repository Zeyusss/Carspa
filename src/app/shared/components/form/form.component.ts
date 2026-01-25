import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { initSignalForm, initWashList } from './model/form.init';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SignalFormInterface } from './model/form.interface';
import { form, FormField } from '@angular/forms/signals';
import { formSchema } from './model/form.schema';
import { FormErrorComponent } from '../form-error/form-error.component';
import { CarspaStore } from '../../../core/store/store';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentModuleComponent } from '../modules/appointment-module/appointment-module.component';
import { v4 as uuidv4 } from 'uuid';
import { BookingInterface } from '../../../core/models/booking/booking.interface';
import { WashlistInterface } from '../../../core/models/washlist/washlist.interface';
@Component({
  selector: 'app-form',
  imports: [
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormField,
    FormErrorComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [provideNativeDateAdapter()],
})
export class FormComponent implements OnInit {
  readonly store = inject(CarspaStore);
  private readonly dialog = inject(MatDialogRef<AppointmentModuleComponent>);
  updateElementData = input<BookingInterface>();
  today = new Date();
  washList = signal<WashlistInterface[]>(initWashList);
  selectedWash = signal<WashlistInterface | undefined>(initWashList[0]);
  saveImgFile = signal<string | undefined | null>(null);
  inEditMode = computed(() => !!this.updateElementData());
  ngOnInit(): void {
    this.updraftData();
  }

  // Form
  formModel = signal<SignalFormInterface>(initSignalForm);
  signalForm = form(this.formModel, formSchema);

  // selecting the wash type
  selectWashFn(wash: WashlistInterface) {
    this.selectedWash.set(wash);
  }

  // Select Img
  changeImage(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.saveImgFile.set(input.files[0].name);
    }
  }

  // updraft the element to the form

  updraftData() {
    const data = this.updateElementData();
    if (data) {
      this.formModel.update((value) => ({ ...value, ...data }));
      this.selectedWash.set(data?.washType);
      this.saveImgFile.set(data?.img);
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.signalForm().valid()) {
      const finalBooking = {
        ...this.signalForm().value(),
        washType: this.selectedWash(),
        img: this.saveImgFile() ? this.saveImgFile() : null,
      };
      if (this.inEditMode()) {
        const id = this.updateElementData()?.id;
        if (id) {
          this.store.updateAppointment(id, finalBooking);
        }
      } else {
        this.store.addAppointment({ ...finalBooking, id: uuidv4() });
      }
      this.dialog.close();
    }
  }
}
