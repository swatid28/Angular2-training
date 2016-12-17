import {Component} from '@angular/core'
@Component({
    selector : 'greeter',
    template : `<h1>Greeter</h1>
                <label for="" >Name : </label>
                <input type="text" [(ngModel)]="name">
                <input type="button" name="" id="" value="Greet" (click)='GreetClick()'>
                <div>{{message}}</div>`
})
export class GreeterComponent {
    message:string ='A sample message';
    name:string = '';
    GreetClick(){
        this.message = 'Hi ' + this.name + ', Have a nice day!';
    }
}
