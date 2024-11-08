import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: MobileValidatorDirective,
      multi: true
    }
  ]
})
export class MobileValidatorDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = this.mobileValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  mobileValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        let isValid = /^[6-9]\d{9}$/.test(control.value);
        if (isValid) {
          if (control.value == '6666666666' || control.value == '7777777777' || control.value == '8888888888' || control.value == '9999999999') {
            return {
              mobileValidator: { valid: false }
            }
          }
          else {
            return null;
          }
        } else {
          return {
            mobileValidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }
}
