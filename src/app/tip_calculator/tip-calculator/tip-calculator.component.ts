import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tip-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './tip-calculator.component.html',
  styleUrl: './tip-calculator.component.css',
})
export class TipCalculatorComponent {
  bill: number = 0.0;
  people: number = 0;
  customTip: number = 0;
  selectedTip: number = 0;

  formatBill(): void {
    if (this.bill !== null && this.bill !== undefined) {
      this.bill = Number(this.bill.toFixed(2));
    }
  }

  validatePeople(): void {
    if (this.people !== null && this.people !== undefined) {
      this.people = Math.floor(this.people);
    }
  }

  selectTip(percentage: number): void {
    this.selectedTip = percentage;
    this.customTip = 0;
  }

  onCustomTipChange(): void {
    this.selectedTip = this.customTip;
  }

  get tipAmountPerPerson(): number {
    if (this.people <= 0) return 0;
    return (this.bill * this.selectedTip) / 100 / this.people;
  }

  get totalPerPerson(): number {
    if (this.people <= 0) return 0;
    const tipAmount = (this.bill * this.selectedTip) / 100;
    return (this.bill + tipAmount) / this.people;
  }

  reset() {
    this.bill = 0;
    this.people = 0;
    this.selectedTip = 0;
  }
}
