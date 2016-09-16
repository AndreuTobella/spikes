import { Component } from '@angular/core';
import { FirstCComponent } from './first-c';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [FirstCComponent]
})
export class AppComponent {
  title: string = 'app works!';
  subtitle:string = 'subtitle works!'
}
