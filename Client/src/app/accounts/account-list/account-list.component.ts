import { Component, OnInit } from '@angular/core';
import { appUser } from 'src/app/_models/appUser';
import { AppusersService } from 'src/app/_services/appusers.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
appUsers: appUser[];

  constructor(private appuserService: AppusersService) { }

  ngOnInit(): void {
    this.loadAppUsers();
  }

  loadAppUsers(){
    this.appuserService.getAppUsers().subscribe({
      next: appusers => this.appUsers = appusers
    }
    )
  }
}
