import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Injectable()
export class FormControlService {

  constructor() { }

  toFormGroup(fields: any) {
    const group: any = {};

    fields.forEach(field => {

      if (field.iterable) {

        if (!Array.isArray(field.value)) {
            field.value = !!field.value ? [field.value] : [''];
        }

        const tmpArray: FormArray = field.required ? new FormArray([]) : new FormArray([], Validators.required);

        if (!field.value || !field.value.length) {
          tmpArray.push(new FormControl(''));
        } else {
            field.value.forEach(val => {
            tmpArray.push(new FormControl(val));
          });
        }

        group[field.key] = tmpArray;

      } else {

        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');

      }

    });
    return new FormGroup(group);
  }
}