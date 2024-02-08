import { FormGroup } from '@angular/forms';

/**
 * EXPLANATION:
 * A FormModel represents a form in our application.
 * It should contain the form's state (in the form property) and any logic related to manipulating or validating this state.
 * FormModel might contain methods responsible for:
 *    - Validating the form
 *    - Updating form fields
 *    - Resetting the form or form fields
 */
export abstract class BaseFormModel {
  // TODO => store the initial value within different form models
  readonly initialValue: any;
  abstract form: FormGroup;
}
