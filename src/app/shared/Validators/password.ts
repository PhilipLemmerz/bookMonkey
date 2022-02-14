import { ValidationErrors } from "@angular/forms";

export class PasswordValidator {

  static checkEqual(formGroup: any): null | ValidationErrors {
    const pwdOne = formGroup.get('passwordOne').value;
    const pwdTwo = formGroup.get('passwordRepeat').value;

    if (pwdOne == pwdTwo) {
      return null
    } else {
      return { valid: false }
    }
  }
}
