import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [PostComponent, EditPostComponent],
  imports: [
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
