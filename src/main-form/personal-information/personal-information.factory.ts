import { Injectable } from '@angular/core';
import { BaseFactory } from '../../core/base.factory';
import { PersonalInformationModel } from './personal-information.model';

// Factory Design Pattern usage
@Injectable({ providedIn: 'root' })
export class PersonalInformationFactory extends BaseFactory {
  create(): PersonalInformationModel {
    return new PersonalInformationModel();
  }
}
