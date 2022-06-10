import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './encuesta/encuesta.component';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  exports:[
    EncuestaComponent
  ]
})
export class FormModule { }
