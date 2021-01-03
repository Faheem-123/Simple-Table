import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {


  data: any;
  editForm:FormGroup;
  error:string;
  id1: any;
  id2: any;
  constructor(private router:Router, private route:ActivatedRoute,private myservice:AuthService) { }

  ngOnInit(): void {

    this.editForm=new FormGroup({
      id: new FormControl(null,[Validators.required]),
      title: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      content: new FormControl(null,[Validators.required])
    });

    this.id1 = this.route.snapshot.params.selectedAuthorId;
    this.id2 = this.route.snapshot.params.id2;
    this.getPostsId(this.id1,this.id2)
  }

  getPostsId(id1,id2){
    this.myservice.getPostsByAuthors(this.id1,this.id2).subscribe(data=>{
       this.data=data;
       console.log(this.data);
       this.editForm.patchValue({
        id: this.data.id,
        title: this.data.title,
        description: this.data.description,
        content: this.data.content
      });
      //  console.log(this.data);
     })
    
   }

    onSubmit() {}
    
  //   this.myservice.updatePostsForm(this.editForm.value).subscribe(
  //     (data) => {
  //       // this.data=data;
  //       this.router.navigate(['/post'])
  //     console.log("Updated data"+this.data)
  
  //     },
  //     (error) => {
  //       console.log(this.error)
  //       this.error = error
  //     })
  //   }

}
