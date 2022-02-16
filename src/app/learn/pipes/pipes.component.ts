
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'pl-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() {

  }

  date = new Date();
  value = 5.289;
  valueP = 0.421252;
  valueC = 3.14159;
  sliceExpression = 'hallo Welt'
  multiplicator: number;

  myBehaviorSubject$: BehaviorSubject<string> = new BehaviorSubject('hallo');

  book = {
    title: 'angular',
    year: 2016,
    rating: 5
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.myBehaviorSubject$.next('Welt')
    }, 1000);
  }



  setMultiplicator(number: string) {
    let newNumber = parseInt(number);
    this.multiplicator = newNumber;
  }

}
