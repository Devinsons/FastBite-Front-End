import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {User} from "../../model/user.entity";

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.css'
})
export class ProfileUpdateComponent implements OnInit{

  user:User= {} as User;

  constructor(private profileService: ProfileService){
  }

  ngOnInit(): void {
    console.log("Iniciando la perfil de usuario");
    this.getProfileById(2)
  }

  getProfileById(profileId: number) {
    this.profileService.getById(profileId).subscribe((response: any) => {
      console.log("Response", response);
      this.user = response;
      console.log("User", this.user);
    });
  }

  updateProfile() {
    let profileToUpdate = this.user;
    this.profileService.update(this.user.id, profileToUpdate).subscribe(
      (response : any)=> {
        console.log("Response", response);
      });
  }
}
