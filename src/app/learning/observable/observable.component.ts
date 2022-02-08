import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, scan, share, timer } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'pl-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private bs: BookStoreService) { }

  //Timer
  timer$ = timer(0, 500);

  // Daten transformieren

  obs$ = of(1, 2, 3, 4, 5)

  // scan - Daten zusammenfassen

  scan$ = of(1,-2,5, -1, 7, -10);


  ngOnInit(): void {

    //Timer
    // this.timer$.subscribe(
    //   (val) => console.log(val)
    // )


    // Daten transformieren -- map() & filter()
    this.obs$.pipe(
      map(val => val * 3),        // führt funktion auf Observable aus (*3) Ergebnis: 3, 6, 9, 12 ,15
      filter(val => val % 2 ===0) // filtert dann gerade Zahlen, Ergebnis: 6, 12
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
    let bookShared$ : Observable<Book> = book$.pipe(share()); // Diesesn teilen wir in der Variable bookShared$

    bookShared$.subscribe(res => console.log(res) ); // wir subscriben auf bookShared 2x, damit führen wir trotzdem nur einen request aus.
    bookShared$.subscribe(res => console.log(res));

  }




}
