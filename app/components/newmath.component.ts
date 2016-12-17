import {Component} from '@angular/core';
import {MathCalculator} from '../MathCalculator';
@Component({
    selector : 'newmath',
    templateUrl : 'app/template/MathComponent.template.html'
})
export class NewMathComponent {
    calculator:MathCalculator = new MathCalculator();
    operation : string = '';
    calculate(){
        this.calculator[this.operation]();
    }
}
