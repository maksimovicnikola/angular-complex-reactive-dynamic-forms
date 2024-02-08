import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BaseFormModel } from '../core/base-form.model';
import { PersonalInformationFactory } from '../main-form/personal-information/personal-information.factory';
import { EducationFactory } from './education/education.factory';
import { PersonalInformationModel } from './personal-information/personal-information.model';

// Form Model Design Pattern, Facade Design Pattern, Observer pattern
@Injectable({ providedIn: 'root' })
export class MainFormModel extends BaseFormModel {
  private unsubscribe$ = new Subject<void>();

  form!: FormGroup;

  constructor(
    private personalInformationFactory: PersonalInformationFactory,
    private educationFactory: EducationFactory,
    private _fb: FormBuilder
  ) {
    super();

    const personalInformation = this.personalInformationFactory.create();

    this.form = this._fb.group({
      personalInformation: personalInformation.form,
    });

    this._setupEducationControl(personalInformation);
  }

  destroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Track the education dropdown value
   * On YES, add the education form part to the main form and render it's view
   * ON NO, remove it from the form and from the view
   */
  private _setupEducationControl(
    personalInformation: PersonalInformationModel
  ): void {
    personalInformation.form
      .get('hasEducation')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasEducation: string) => {
        if (hasEducation === 'Yes') {
          const education = this.educationFactory.create();

          this.form.addControl('education', education.form);
        } else {
          this.form.removeControl('education');
        }
      });
  }
}
