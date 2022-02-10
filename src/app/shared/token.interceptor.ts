import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
   token: string = '1234567890'

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({  // ein Request kann nie verändert werden, er muss geklont werden
      setHeaders: {
        Authorization: `Bearer ${this.token}` // es wird eine Header erstellt mit dem AuthToken -dieser wird bei JEDEM Request mitgesendet
      }
    })
    return next.handle(newRequest);
  }
}
