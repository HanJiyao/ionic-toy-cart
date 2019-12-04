import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toy } from '../../models/product'
import { ToyService } from '../../providers/ToyService'
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage  {
 

  toys: Toy[];

  selectedToys:Toy[] = [];
  constructor(public navCtrl: NavController, private toyService: ToyService) {
  }
  ngOnInit() {
    this.toyService.getToys()
    .subscribe(toys => {
      this.toys = toys;
    });
  }
  itemTapped(event, toy) {
    this.navCtrl.push(DetailPage, {
      toy: toy
    });
  }
  toogleAdd(event, toy) {

    if (this.selectedToys.findIndex(toy)!=-1){
      this.selectedToys.push(toy)
      toy.cart = "add-circle"
    } else {
      this.selectedToys.splice(this.selectedToys.findIndex(toy), 1)
      toy.cart = "add"
    }
  }
  showSummary(){
    var text = ""
    var sum = 0
    for (var i=0;i<this.selectedToys.length;i++) {
      text += "\n " + this.selectedToys[i].name
      sum += this.selectedToys[i].price*(100-this.selectedToys[i].discount)/100
    }
    alert(' Search submitted:'
        + text
        + "\n TOTAL: "+ sum
      );
  }
}
