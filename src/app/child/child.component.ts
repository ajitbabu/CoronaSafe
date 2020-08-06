import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings: [];
  message:string="MAsha";
  @Output() messageEvent = new EventEmitter<string>();

  id: number;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log("child id-->",this.id);

  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
