import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { appUser } from 'src/app/_models/appUser';
import { AppusersService } from 'src/app/_services/appusers.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  appuser: appUser;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private appuserService: AppusersService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadAppUsers();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for(const photo of this.appuser.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })

      return imageUrls;
    }
  }

  loadAppUsers(){
    this.appuserService.getUser(this.route.snapshot.paramMap.get('username')).subscribe(user=> {
      this.appuser = user;
      this.galleryImages = this.getImages();
    })
  }
}
