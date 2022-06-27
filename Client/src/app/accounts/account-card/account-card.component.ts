import { Component, Input, OnInit } from '@angular/core';
import { appUser } from 'src/app/_models/appUser';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {
  @Input() appuser: appUser;

  constructor() { }

  ngOnInit(): void {
  }

}
