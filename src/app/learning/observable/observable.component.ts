
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, filter, interval, map, mergeMap, Observable, of, ReplaySubject, scan, share, Subject, takeUntil, timer } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'pl-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor(private bs: BookStoreService) { }

  //Timer
  timer$ = timer(0, 500);

  // Daten transformieren

  obs$ = of(1, 2, 3, 4, 5)

  // scan - Daten zusammenfassen

  scan$ = of(1, -2, 5, -1, 7, -10);


  // Subject

  subjectValue: string = '';
  behaviorSubjectValue: string = '';


  // Unsubscriben

  // Weg 1
  subscribtion1 = interval(1000).subscribe(val => console.log(val));
  // Weg 2 (bei vielen Observables Best practice - da weniger Code)
  private destroy$ = new Subject();




  ngOnInit(): void {

    // Unsubscriben - Weg 2
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(val => console.log(val));

    //Timer
    this.timer$.pipe(takeUntil(this.destroy$)).subscribe(
      (val) => console.log(val)
    )


    // Daten transformieren -- map() & filter()
    this.obs$.pipe(
      map(val => val * 3),        // führt funktion auf Observable aus (*3) Ergebnis: 3, 6, 9, 12 ,15
      filter(val => val % 2 === 0) // filtert dann gerade Zahlen, Ergebnis: 6, 12
    ).subscribe(
      val => console.log('nix')
    );

    // scan - Daten Zusammenfassen

    this.scan$.pipe(
      scan((acc: number, score: number) => acc + score, 0) // Startwert = 0, dann wir der eintreffende Wert immer aufaddiert.
    ).subscribe(
      val => console.log(val)
    )

    // shared - Operator (Ein http Request trotz 2 subscribern)

    let book$ = this.bs.getSingle('9783864907791'); // Es wird der Request ausgeführt,
    let bookShared$: Observable<Book> = book$.pipe(share()); // Diesesn teilen wir in der Variable bookShared$

    bookShared$.subscribe(res => console.log(res)); // wir subscriben auf bookShared 2x, damit führen wir trotzdem nur einen request aus.
    bookShared$.subscribe(res => console.log(res));

    // Subject

    const mySubject$ = new Subject<string>();

    mySubject$.subscribe(val => this.subjectValue = val)

    setTimeout(() => {
      mySubject$.next('Welt');
    }, 2000);

    mySubject$.next('Hallo');

    // Behaviour-Subject

    const myBehaviorSubject$ = new BehaviorSubject<string>('Startwert');

    myBehaviorSubject$.subscribe(val => this.behaviorSubjectValue = val)

    setTimeout(() => {
      myBehaviorSubject$.next('Welt'); // im template geschrieben wird 'Startwert' und dann nach 1sekunde 'Welt'
    }, 2000);

    //Replay Subject

    const myReplaySubject$ = new ReplaySubject<string>(3) // Anzahl der Daten die gebuffert werden.

    myReplaySubject$.next('viertes'); // wird nicht gebuffert und angezeigt, da 4>3
    myReplaySubject$.next('drittes'); // wird ausgeloggt
    myReplaySubject$.next('zweites'); // wird ausgeloggt
    myReplaySubject$.next('erstes'); // wird ausgeloogt

    myReplaySubject$.subscribe(
      oldvalues => {                        // Funktion wie if() in einer Subscribten (hier: Typenprüfung) !!!
        if (typeof oldvalues === 'string') {
          console.log(oldvalues);            // buffert die alten Werte siehe oben
        }
      }
    );

    // Higher Order Observables
    // Anwendung: immer wenn ein trigger$ Wert eintrifft soll z.B. ein http-request ausgeführt werden.

    let trigger$ = interval(1000);  // trigger Observable
    let inner$ = new Observable(subscriber => { // innere Observable
      subscriber.next('a');
      subscriber.next('b');
      subscriber.next('c');
      subscriber.complete();
    })

    trigger$.pipe(takeUntil(this.destroy$),                // wenn ein neuer Wert von trigger$ eintrifft wollen wir dies umwandeln in eine subscribtion des inner$ Observables
      mergeMap(() => inner$)      // Alternativen sind switchMap(), concatMap() und exhaustMap()
    ).subscribe(val => console.log(val));

  }

  ngOnDestroy() {
    // Unsubscriben Weg 1
    this.subscribtion1.unsubscribe();
    // Unsubscriben Weg 2
    this.destroy$.next('');  // dieser Weg wird auf 3 oder 4 Subscribtions in dieser Datei angewandt.
  }
}
