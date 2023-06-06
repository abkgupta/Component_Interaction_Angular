import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // for par to child interaction
  @Input() item = ' ';

  // for child to parent interaction
  @Output() newItemEvent = new EventEmitter<string>()
  ngOnInit(): void {
  }
   addnewItem(value: string) {
    console.log(value)
    this.newItemEvent.emit(value)
   }
}
