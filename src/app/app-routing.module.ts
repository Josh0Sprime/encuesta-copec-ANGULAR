import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './form/encuesta/encuesta.component';

const routes: Routes = [
  {
    path: 'Encuesta-copec',
    component: EncuestaComponent
  },
  {
    path: '**',
    redirectTo: 'Encuesta-copec'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
