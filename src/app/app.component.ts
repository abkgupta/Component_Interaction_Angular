import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parchildinter';
  Currentdetail = "Parent to child fine"

   items = ['item1','item2','item3','item4','item5']

   addItem(newItem:string) {
    this.items.push(newItem)
   }
}
