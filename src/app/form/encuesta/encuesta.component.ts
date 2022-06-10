import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styles: [`
  .back-c{
    background-color:#e1e0e0;
    width: 800px;
    border-radius: 10px;
    border-color: black;
  }
 
.mat-radio-button ~ .mat-radio-button {
  margin-left: 16px;
  
}

::placeholder { color: black; }
  `
  ]
})
export class EncuestaComponent implements OnInit {

  
  formulario: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required, Validators.minLength(5)]],
    'fiebre': ['', [Validators.required]],
    'tos': ['', [Validators.required]],
    'falta de aire': ['', Validators.required],
    'fatiga': ['', Validators.required],
    'dolores musculares': ['', Validators.required],
    'dolor de cabeza': ['', Validators.required],
    'perdida de gusto': ['', Validators.required],
    'dolor garganta': ['', Validators.required],
    'congestion': ['', Validators.required],
    'nauseas': ['', Validators.required],
    'diarrea': ['', Validators.required],
    'positivo covid': ['', Validators.required],
    'espera resultado covid': ['', Validators.required],
    'diagnosticado covid': ['', Validators.required],
    'sospecha covid': ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { };
  ngOnInit(): void {
  }
 
}
