import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { GreeterComponent} from './components/greeter.component';
import { SalaryComponent} from './components/salary.component';
import { MathComponent} from './components/math.component';
import { NewMathComponent} from './components/newMath.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreeterComponent, SalaryComponent, MathComponent,NewMathComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
