import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { appUser } from 'src/app/_models/appUser';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AppusersService } from 'src/app/_services/appusers.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  appuser: appUser;
  user: User;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {
      return false;
    }
  }

  constructor(private accountService: AccountService, private appuserService: AppusersService,
    private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    //console.log(this.user.userName);
   }

  ngOnInit(): void {
    this.loadAppUser();
  }

  loadAppUser() {
    this.appuserService.getUser(this.user.userName).subscribe({
      next: apuser => this.appuser = apuser
    });
  }

  updateUser() {
    this.appuserService.updateAppUser(this.appuser).subscribe(()=> {
      this.toastr.success('Details updated successfully!');
      this.editForm.reset(this.appuser);
      console.log(this.appuser);
    })    
  }

}
