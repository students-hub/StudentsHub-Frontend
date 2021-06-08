import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VueComponent } from './pages/micro/vue/vue.component';
import { ReactComponent } from './pages/micro/react/react.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(mod => mod.RegisterModule) 
  },
  { path: 'vue', component: VueComponent },
  { path: 'react', component: ReactComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
