import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toy } from '../../models/product'

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  toy: Toy;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let image = navParams.data.toy.image;
    let name = navParams.data.toy.name;
    let price = navParams.data.toy.price;
    this.toy = new Toy (name,price,image,0,0,'');
  
  }

}
