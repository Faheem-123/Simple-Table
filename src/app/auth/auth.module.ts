import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './create/create.component';
import { AuthService } from './auth.service';
import { EditAuthComponent } from './edit-auth/edit-auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    CreateComponent,
    EditAuthComponent
    
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
      
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
