import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { NgForm } from '@angular/forms';
import { Member } from '../../models/member'


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  member: Member
  deliveryDates: string[] = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', "Sat", "Sun"]

  submitted = false; 

  constructor(public navCtrl: NavController) {
      this.member = new Member('', this.deliveryDates[0], 0)
  }

  get price(){
    return this.member.price
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
  if (form.valid) { 
      alert(' search submitted:'
        + "\n Email: " + this.member.email
        + "\n Delivery: "+ this.member.delivery
        + "\n Max price: " + "$"  + this.member.price
      );
      this.navCtrl.push(ListPage); 
    } 
  }

}
