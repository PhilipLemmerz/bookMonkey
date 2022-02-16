import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorService {                                                   // Async Validators immer als Service aufsetzen

  constructor(private bs : BookStoreService) { }

  validate(formControl: AbstractControl): Observable<ValidationErrors | null> {
    return this.bs.checkIsbn(formControl.value).pipe(
      map(res => (res===false)? null : {exists: {valid: false} } )                        // Durch ISBNEXISTS können wir auf den Error zugreifen und indiv. Fehler ausgeben
    );
  }
}
