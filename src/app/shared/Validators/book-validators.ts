import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export class BookValidators {

  static validateIsbn(formControl: AbstractControl): ValidationErrors | null {
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;                              // Pattern für ISBN
    const isbnWithoutMinus = formControl.value.replace(/-/g, '');              // Entfernt Slashed
    if (isbnPattern.test(isbnWithoutMinus)) {                                 // führt Validierungstest aus
      return null
    } else {
      return { format: { valid: false } }
    }
  }

  static validateAuthor(formArray: AbstractControl): ValidationErrors | null {
    if ((formArray as FormArray).controls.some((el: AbstractControl) => el.value)) {
      return null
    } else {
      return {
        atLeastOneAuthor: { valid: false }                                                      // durch AtLeastOneOther könnn wir eine message für diesen individuellen Fehler ausspielen
      }
    }
  }


}
