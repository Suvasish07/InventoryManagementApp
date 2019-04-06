import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  username:string;
  password:string;
  loginstatus:any;
  constructor( private router: Router ,private global:GlobalService,private  service:ServiceService) { }

  ngOnInit() {
  }

  loginFunc() {

    if(this.password && this.username) {
      this.global.username=this.username;
      this.global.password=this.password;
      this.service.loginService().subscribe(
        status => {
          console.log(status)
           this.loginstatus=status;
           this.global.loginstatus=true;
           this.router.navigate(['./product']);

        }
    );
    }



  }



}
