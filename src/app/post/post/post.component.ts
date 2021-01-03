import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  authors:[];
  posts:[];
  selectedAuthorId: any;


  constructor(private myservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.getAuthorsData();
  }


  getAuthorsData(){  
    this.myservice.getAuthor().subscribe(
      (response)=>{
        this.authors=response;
        console.log("get data from database"+this.authors);
      }
    )
    }

    onChange(id){      
      // this.router.navigate(['/post/:selectedAuthorId/:id'])
      console.log(id.target.value);
      this.selectedAuthorId=id.target.value;
      this.myservice.getPostsByAuthor(id.target.value).subscribe(
        (response)=>{
        
          console.log("posts table data"+response)
          this.posts=response;

         
        }
      )
    }
}
