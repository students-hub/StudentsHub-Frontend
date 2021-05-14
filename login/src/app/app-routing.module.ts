import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './pages/empty/empty.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'vue', component: EmptyComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
