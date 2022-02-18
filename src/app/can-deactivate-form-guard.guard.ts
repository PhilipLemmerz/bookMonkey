import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { CreateNewBookComponent } from './admin/create-new-book/create-new-book.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateFormGuardGuard implements CanDeactivate<CreateNewBookComponent> {

  canDeactivate(component: CreateNewBookComponent): boolean {
    if (component.send) {
      return true
    } else {
      return confirm($localize`:@@canDeactivate:leaveConfirm\:Möchtest du die Seite wirklich verlassen? - Deine Eingaben gehen verloren`)
    }
  }
}
