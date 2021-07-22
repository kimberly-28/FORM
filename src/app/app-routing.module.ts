import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyCallComponent } from './pages/emergency-call/emergency-call.component';

const routes: Routes = [
  {
    path: 'unilever-churchill-frc-reports', component: EmergencyCallComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
