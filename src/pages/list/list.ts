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

  selectedToys:Toy[];
  constructor(public navCtrl: NavController, private toyService: ToyService) {
  }
  ngOnInit() {
    this.toyService.getToys()
    .subscribe(toys => {
      this.toys = toys;
      console.log(toys)
    });
  }
  itemTapped(event, toy) {
    this.navCtrl.push(DetailPage, {
      toy: toy
    });
  }
  toogleAdd(event, toy) {
    this.selectedToys+=toy
  }
  showSummary(){
    var text = ""
    var sum = 0
    for (var i=0;i<this.selectedToys.length;i++) {
      text += this.selectedToys[i].name
      sum += this.selectedToys[i].price*(1-this.selectedToys[i].price)/100
    }
    alert(' search submitted:'
        + text
        + "\n TOTAL: "+ sum
      );
  }
}
