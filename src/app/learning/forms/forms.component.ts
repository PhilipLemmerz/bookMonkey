import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'pl-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  constructor() { }

  // reactive form
  reactiveForm: any;


  //template-driven-form
  @ViewChild('ourTemplateForm') ourTemplateForm: NgForm   // Holt die Referenz von <form #ourForm ...> in die Klasse

  templateForm = {
    lastName: '',
    password: '',
  }


  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl(''),

      name: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl('')
      }),
      email: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
      ])
    })

    // reactive Forms - Reaktion auf Werte/ Zustandsänderungen

    this.reactiveForm.get('username').valueChanges.subscribe(
      (val: Observable<FormGroup>) =>  console.log(val)
    )

    this.reactiveForm.get('username').statusChanges.subscribe(
      (val: Observable<FormGroup>) => console.log(val)
    )
  }

  //ReactiveForm

  submitReactiveForm() {
    console.log(this.reactiveForm.value);
  }


  // Template Form
  submitTemplateForm() {
    console.log(this.templateForm);
    this.ourTemplateForm.reset();   // setzt form zurück
  }

  setAllValues() {
    this.reactiveForm.setValue({
      username: 'Philip',
      password: 'password',
      name: {
        firstname: 'firstname',
        lastname: 'lastname',
      },
      email: [
        'one@mail.de',
        'two@mail.de',
        'three@mail.de'
      ]
    })
  }

  patchOneValue() {
    this.reactiveForm.patchValue({
      name: {
        firstname: 'neuername'
      }
    })
  }
}





