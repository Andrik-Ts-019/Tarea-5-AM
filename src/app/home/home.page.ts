import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fotos: any[];
  imgURL;

  constructor(private camara: Camera, public file: File) {}

  getCamera(){
    var options: CameraOptions={
      quality: 100,
      mediaType: this.camara.MediaType.PICTURE,
      destinationType: this.camara.DestinationType.FILE_URI,
      encodingType: this.camara.EncodingType.JPEG
    }
    this.camara.getPicture().then((imagedata)=>{
      let filename = imagedata.substring(imagedata.lastIndexOf('/')+1);
      let path = imagedata.substring(0,imagedata.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64data)=>{
        this.fotos.push(base64data);
      })
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
