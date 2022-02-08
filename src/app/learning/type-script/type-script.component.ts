
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';


@Component({
  selector: 'pl-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.scss']
})


export class TypeScriptComponent extends HeaderComponent implements OnInit {

  //unkown & any
  anyVar: any = 'any';
  unknownVar: unknown = 'unknown';
  newOne: string = 'text';


  // Lamda-Ausdürcke
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6];

  lamdaReturn1 = this.numbers.filter(
    value => value % 2 === 0
  )
  // => lambdaRetrun1 & lambdaReturn2 machen genau das gleiche
  lamdaReturn2 = this.numbers.filter(
    function (value) {
      return value % 2 == 0;
    }
  )
  // MethodenTypen
  returnOfFunction: number = this.checkFunctionType();


  override ngOnInit(): void {

    //unkown & any

    this.newOne = typeof this.unknownVar === 'string' ? this.unknownVar : 'string';

    //oder

    if (typeof this.unknownVar === 'string') {
      this.newOne = this.unknownVar
    }


  }

  // MethodenTypen
  checkFunctionType(): number {
    return 5;
  }


  // Spread-Operator

  myObject = { name: 'philip', year: 1997 };

  copy = {...this.myObject, year: 2002};


  // ngClass & ngStyle Syntax

  hasError: boolean = false;
  isActive : boolean = true
  myColor: string = 'blue'



















}



