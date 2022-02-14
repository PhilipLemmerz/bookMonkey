import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidators {
  static atLeastOneMail(controlArray: any): ValidationErrors | null {

    const mailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const containsMail = controlArray.controls.some((element: AbstractControl) => element.value);

    if (containsMail && containsMail.test(mailPattern)) {
      return null
    } else {
      return {
        mail: { valid: false }
      };
    }
  }
}



