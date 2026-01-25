import { pattern, required, schema } from '@angular/forms/signals';
import { SignalFormInterface } from './form.interface';

export const formSchema = schema<SignalFormInterface>((rootPath) => {
  required(rootPath.name, { message: 'Name is required!' });
  required(rootPath.phone, { message: 'Phone is required!' });
  required(rootPath.vehicle, { message: 'Vehicle is required!' });
  required(rootPath.date, { message: 'Date is required!' });
});
