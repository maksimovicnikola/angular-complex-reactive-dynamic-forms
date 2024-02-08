import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { MainFormModel } from './main-form.model';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EducationComponent,
    PersonalInformationComponent,
  ],
})
export class MainFormComponent implements OnDestroy {
  // TODO - keep the current entire form within the NgRx state, so it could be selected within any component if necessary
  constructor(public model: MainFormModel) {}

  ngOnDestroy(): void {
    this.model.destroy();
  }

  onSubmit() {
    if (this.model.form.valid) {
      console.log(this.model.form);
    }
  }

  get personalInformation(): FormGroup {
    return this.model.form.get('personalInformation') as FormGroup;
  }

  get education(): FormGroup {
    return this.model.form.get('education') as FormGroup;
  }
}
