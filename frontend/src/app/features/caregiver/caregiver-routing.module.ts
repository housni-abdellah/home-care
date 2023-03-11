import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaregiverComponent } from './caregiver.component';

const routes: Routes = [
  { path: '', component: CaregiverComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaregiverRoutingModule { }
