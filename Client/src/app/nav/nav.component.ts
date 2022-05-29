import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, 
    private router: Router, 
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  Login() {
    this.accountService.login(this.model).subscribe({
      next: (user)=> {
        this.router.navigateByUrl('/accounts');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
