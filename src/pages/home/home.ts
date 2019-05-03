import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas = []; 
  datasCopy = [];
  showSearchBar:boolean= false;
  xyz: Array<any> = new Array(60);
  searchTerm : any="";
  try : Array<any> = new Array(20);
  
  constructor(public navCtrl: NavController,private data:DataProvider) {

  }
  ngOnInit() {
    setTimeout(() => { this.data.getData().subscribe(data =>
      {
          this.datas = data;
          this.datasCopy = data;
          console.log(this.datas[10]);
      }); }, 3000); 
  }  

  onClick(id)
  {
    this.navCtrl.push(InfoPage,{
      id:id
    });
  }
  setFilteredItems() {
    this.resetChanges();
    this.datas =  this.datas.filter((item) => {
    
    return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  });  

  }
  protected resetChanges = () => {
    this.datas = this.datasCopy;
  };
  doInfinite()

  {}
   
}
  
  

