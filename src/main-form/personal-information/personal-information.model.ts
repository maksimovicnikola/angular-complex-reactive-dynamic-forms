import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BaseFormModel } from '../../core/base-form.model';

export class PersonalInformationModel extends BaseFormModel {
  form: FormGroup;

  constructor() {
    super();

    const fb = new FormBuilder();

    this.form = fb.group({
      name: ['', Validators.required],
      hasEducation: ['No'],
    });
  }
}
