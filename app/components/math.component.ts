import {Component} from '@angular/core';
import {MathCalculator} from '../model/MathCalculator';
@Component({
    selector : 'math',
    template : `<h1>Math Calculator</h1>
                <div class="content">
					<div class="field"><label for="">Number 1 : </label><input type="number" [(ngModel)]="math.number1" name=""></div><br>
					<div class="field"><label for="">Number 2 : </label><input type="number" [(ngModel)]="math.number2" name=""></div><br>
					
					<div class="field"><input type="button" value="Add" id="btnCalculate" (click)='math.add()'>
                    <input type="button" value="Subtract" id="btnCalculate" (click)='math.subtract()'>
                    <input type="button" value="Multiply" id="btnCalculate" (click)='math.multiply()'>
                    <input type="button" value="Divide" id="btnCalculate" (click)='math.divide()'></div><br>
					
                    <div class="field">
						<div>Result : {{math.result}}</div>
					</div>
					<hr>
				</div>`
})
export class MathComponent {
    math:MathCalculator = new MathCalculator();    
}
