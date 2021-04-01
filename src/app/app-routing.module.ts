import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Nested routing
  { 
    path: 'home',  
    children: [
      { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
      { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuard] },
    ]
  },

  // Refactor routing to use lazy loading
  // { 
  //   path: 'home', 
  //   component: HomeComponent
  // },
  // {
  //   path: 'clients',
  //   loadChildren: () => import(`./home/clients/clients.module`).then(module => module.ClientsModule),
  // },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
