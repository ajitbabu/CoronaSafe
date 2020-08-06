import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent implements OnInit, AfterViewInit {

firstName: string;
lastName: string;
siblings: Array<string>;

classDummy = "strike";
styleDummy = {'color': 'orange', 'background-color': 'violet'};
@ViewChild(ChildComponent) child;
message:string;
  constructor() { }
  ngAfterViewInit(): void {
    this.message = this.child.message;
    console.log("message",this.message);
  }

  ngOnInit(){
    this.firstName = 'Ajit';
    this.lastName = 'Babu';
    this.siblings = new Array<string>('Ajit','Jane', 'Jack', 'Sophie');
}

receiveMessage($event) {
  this.message = $event
}

}
