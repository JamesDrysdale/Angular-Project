import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { ClientsComponent } from './clients/clients.component';
import { ContractorsComponent } from './contractors/contractors.component';

//Ant Design Imports
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [
    ClientsComponent, 
    ContractorsComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
  ]
})
export class HomeModule { }
