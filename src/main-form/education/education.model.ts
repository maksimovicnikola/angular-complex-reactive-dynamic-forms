import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BaseFormModel } from '../../core/base-form.model';
// Form Model Design Pattern usage
export class EducationModel extends BaseFormModel {
  form: FormGroup;

  constructor() {
    super();

    const fb = new FormBuilder();

    this.form = fb.group({
      schoolName: ['', Validators.required],
      degree: ['', Validators.required],
    });
  }
}
