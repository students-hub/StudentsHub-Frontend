import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VueComponent } from './pages/micro/vue/vue.component';


const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule) 
  },
  { path: 'vue', component: VueComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
