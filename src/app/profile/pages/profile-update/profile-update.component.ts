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
  uploadedImageSrc: string | undefined;

  constructor(private profileService: ProfileService){
  }

  ngOnInit(): void {
    console.log("Iniciando la perfil de usuario");
    this.getProfileById(1)

  }

  getProfileById(profileId: number) {
    this.profileService.getById(profileId).subscribe((response: any) => {
      console.log("Response", response);
      this.user = response;
      console.log("User", this.user);
      this.uploadedImageSrc = this.user.urlToImage;
      console.log("Imagen", this.uploadedImageSrc);
    });
  }

  updateProfile() {
    let profileToUpdate = this.user;
    this.profileService.update(this.user.id, profileToUpdate).subscribe(
      (response : any)=> {
        console.log("Response", response);
      });
  }

  /*Manejo de imagenes locales*/
  onFileSelected(event:any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Crear un FileReader para leer el contenido del archivo
      const reader = new FileReader();

      reader.onload = (e) => {
        // El resultado del FileReader será una URL de datos que representa el archivo
        const dataUrl = reader.result;
        if (typeof dataUrl === 'string') {
          localStorage.setItem('uploadedImage', dataUrl);
          this.uploadedImageSrc = dataUrl;
        }
      };
      // Leer el contenido del archivo como una URL de datos
      reader.readAsDataURL(file);
    }
  }

}
