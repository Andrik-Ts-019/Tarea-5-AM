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
    this.camara.getPicture().then((res)=>{
      this.imgURL = res;
    }).catch(e=>{
      console.log(e);
    })
  }

  getGalery(){

  }

}
