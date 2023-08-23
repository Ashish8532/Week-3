import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string = "Ashish";

  // For Property Binding and Interpolation
  color: string = "green";

  // For Event binding
  newColour: string = "red";
  FunctionClick() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.newColour = randomColor;
  }

  parentMessage: string = "Hii from parent";

  @Input() 
  childData!: string;
}
