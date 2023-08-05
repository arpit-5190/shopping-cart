import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-binding',
  templateUrl: './directive-binding.component.html',
  styleUrls: ['./directive-binding.component.scss']
})
export class DirectiveBindingComponent {
  toggleDisplay : boolean = true;
  clickData:number[] = [];
  counter: number = 0;

  hideShowElement = () => {
    this.toggleDisplay = !this.toggleDisplay;
    this.clickData.push(this.counter);
    this.counter++;
    console.log("click Data", this.clickData);
  }
}
