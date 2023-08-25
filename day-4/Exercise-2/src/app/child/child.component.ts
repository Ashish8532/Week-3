import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DataService]
})
export class ChildComponent {

  constructor(public dataService: DataService) {}
  
}
