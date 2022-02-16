import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const exportedImports = [FormsModule, ReactiveFormsModule, CommonModule];

@NgModule({
  declarations: [],
  imports: [...exportedImports],
  exports: [...exportedImports]
})



export class SharedModule { }
