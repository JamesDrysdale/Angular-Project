import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ClientsComponent, ContractorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
