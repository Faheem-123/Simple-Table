import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';
import { EditAuthComponent } from './edit-auth/edit-auth.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'',
        component:AuthComponent,
      },
      {
        path:'create',
        component:CreateComponent,
      },
      {
        path:'edit/:id',
        component:EditAuthComponent,
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
