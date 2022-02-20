import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminGuardGuard implements CanActivate {
  constructor(private router: Router) { }

  messageShown = false;  // wenn nutzer bereits die Guard bejaht hat wird die Guard in dieser sitzung nicht nochmal angezeigt

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.messageShown) {
      if (confirm($localize`:@@guardCanActivate\:Achtung: Sensibler Bereich
       - Bitte erstelle und bearbeite Bücher gewissenhaft`)) {
        this.messageShown = true;
        return true
      } else {
        return this.router.parseUrl('/home');
      }
    } else return true
  }
}
