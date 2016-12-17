import {Component} from '@angular/core';
import {SalaryCalculator} from '../model/SalaryCalculator';
@Component({
    selector : 'salary',
    template : `<h1>Salary Calculator</h1>
                <div class="content" id="calculator-1">
					<div class="field"><label for="">Basic :</label><input type="number" [(ngModel)]="calculator.basic" name="" id="txtBasic"></div>
					<div class="field"><label for="">HRA :</label><input type="number" [(ngModel)]="calculator.hra" name="" id="txtHra"></div>
					<div class="field"><label for="">DA :</label><input type="number" [(ngModel)]="calculator.da" name="" id="txtDa"></div>
					<div class="field">
						<label for="">Tax :</label>
						<input type="range" name="" id="rangeTax" [(ngModel)]="calculator.tax" min="0" max="30">
						<span id="spanTax">{{calculator.tax}}</span>
					</div>
					<div class="field"><input type="button" value="Calculate" id="btnCalculate" (click)='calculate()'></div>
					<div class="field">
						<div>{{calculator.salary}}</div>
					</div>
					<hr>
				</div>`
})
export class SalaryComponent {
    calculator:SalaryCalculator = new SalaryCalculator();    
}
