import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authors=[];
  
  constructor(private route:Router,private myservice:AuthService){
    
  }


  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.getAuthorsData();
    console.log(this.getAuthorsData());
    this.dtOptions = {
      // pagingType: 'full_numbers',
      // info:false,
      ordering:true
    };
  }

  create(){
    this.route.navigate(['/auth/create']);
  }
  
  getAuthorsData(){  
  this.myservice.getAuthor().subscribe(
    (response)=>{
      this.authors=response;
      console.log("get data from database"+this.authors);
    }
  )
  }

}
