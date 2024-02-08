import { Injectable } from '@angular/core';
import { BaseFactory } from '../../core/base.factory';
import { EducationModel } from './education.model';

// Factory Design Pattern usage
@Injectable({ providedIn: 'root' })
export class EducationFactory extends BaseFactory {
  create(): EducationModel {
    return new EducationModel();
  }
}
