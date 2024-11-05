import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'ourstory', component: OurstoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
