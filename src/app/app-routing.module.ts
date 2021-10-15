import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'editor', component: AppComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  { path: '**', component: MainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
