import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  id:string;
  objectKeys = Object.keys;
 
  datas:any ={}; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private data:DataProvider) {
    this.id = navParams.get('id');
    console.log(this.id)
  }

  ionViewDidLoad() {
    this.data.getInfo(this.id).subscribe(data =>
      {
          this.datas = data;
        
      });  
  }

}
