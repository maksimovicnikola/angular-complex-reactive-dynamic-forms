import { BaseFormModel } from './base-form.model';

/**
 * EXPLANATION:
 * If the logic is more about how to create or instantiate the form (such as deciding which type of form to create based on some conditions), it might be better to place * it in the factory. This keeps the creation logic separate from the form itself.
 * Here, we could place things like:
 *    - Configuration methods if the creation of an object involves complex configuration
 *    - Variation methods, like createWithEducation and CreateWithoutEducation
 *    - Validation methods, if the factory needs to validate some conditions before creating an object
 *    - Define initial value
 *
 */
export abstract class BaseFactory {
  abstract create(): BaseFormModel;
}
