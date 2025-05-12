import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TipCalculatorComponent } from './tip_calculator/tip-calculator/tip-calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TipCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tip-calculator-angular';
}
