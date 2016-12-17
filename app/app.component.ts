import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 App</h1>
  <div>
    <greeter></greeter>
    <salary></salary>
    <math></math>
    <newmath></newmath>
  </div>`,
})
export class AppComponent  { name = 'Blackrock'; }
