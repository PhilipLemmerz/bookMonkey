import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AdressValidator {
  static plzFormat(control: AbstractControl) : ValidationErrors | null  {                     // static -> von außen Zugreifbar
    const plzPattern = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/                         // Regex für PLZ

    return plzPattern.test(control.value) ? null : {                                         // if im Return -> wenn der Wert des übergebenen Control nicht null ist dann gibt einen
      plzFormat: {valid: false}                                                              // ValidationError zurück {valid: false}
    }
  }
}




