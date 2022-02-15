import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export class EmailValidators {
  static atLeastOneMail(controlArray: AbstractControl): ValidationErrors | null {

    const mailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const containsMail = (controlArray as FormArray).controls.some((element: AbstractControl) => element.value);

    if (containsMail) {
      return null
    } else {
      return {
        mail: { valid: false }
      };
    }
  }
}



