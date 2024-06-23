import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {User} from "../../model/user.entity";
import {ImageService} from "../../../shared/services/image.service";

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.css'
})
export class ProfileUpdateComponent implements OnInit{
  user: User = {} as User;
  images: any[] = [];
  selectedImage: string | undefined;
  profileId: string | null = '';

  constructor(private profileService: ProfileService, private imageService: ImageService) {
    this.profileId = localStorage.getItem('profileId');
  }

  ngOnInit(): void {
    console.log("Iniciando la perfil de usuario");
    this.getProfileById(Number(this.profileId));
    this.loadImages();
  }

  getProfileById(profileId: number) {
    this.profileService.getById(profileId).subscribe((response: any) => {
      console.log("Response", response);
      this.user = response;
      console.log("User", this.user);
      this.selectedImage = this.user.urlToImage;
      console.log("Imagen", this.selectedImage);
    });
  }

  updateProfile() {
    let profileToUpdate = {
      ...this.user,
      img: this.selectedImage
    };
    this.profileService.update(Number(this.profileId), profileToUpdate).subscribe(
      (response: any) => {
        console.log("Response", response);
      }
    );
  }

  loadImages() {
    this.imageService.getProfileImages().subscribe((response: any[]) => {
      this.images = response;
    });
  }

}
