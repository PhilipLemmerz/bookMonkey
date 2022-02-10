import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pl-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  @ViewChild('ourForm') ourForm :NgForm   // Holt die Referenz von <form #ourForm ...> in die Klasse

  form = {
    lastName: '',
    password: '',
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
    this.ourForm.reset();   // setzt form zurück
  }

}
