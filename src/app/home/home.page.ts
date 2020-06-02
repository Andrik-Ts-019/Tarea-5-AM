import { Component } from '@angular/core';

import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgURL;

  constructor(private camara: Camera) {}

  getCamera(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.CAMERA,
      destinationType: this.camara.DestinationType.FILE_URI
    }).then((res)=>{
      this.imgURL = res;
    }).catch(e=>{
      console.log(e);
    })
  }

  getGalery(){
    this.camara.getPicture({
      sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camara.DestinationType.DATA_URL
    }).then((res)=>{
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e=>{
      console.log(e);
    })
  }

}
