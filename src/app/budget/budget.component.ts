import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  styleUrls: ['./budget.component.css'],

  template: `<form (ngSubmit)="addIncome()">
  <input type="text" [(ngModel)]="incomeDescription" placeholder="Description">
  <input type="number" [(ngModel)]="incomeAmount" placeholder="Amount">
  <button type="submit">Add Income</button>
</form>
<form (ngSubmit)="addExpense()">
  <input type="text" [(ngModel)]="expenseDescription" placeholder="Description">
  <input type="number" [(ngModel)]="expenseAmount" placeholder="Amount">
  <button type="submit">Add Expense</button>
</form>
<h2>Income</h2>
<ul>
  <li *ngFor="let income of incomes">{{ incomeDescription }}: {{ incomeAmount }}</li>
</ul>
<h2>Expenses</h2>
<ul>
  <li *ngFor="let expense of expenses">{{ expenseDescription }}: {{ expenseAmount }}</li>
</ul>
<button (click)="calculateBalance()">Calculate</button>
<p *ngIf="showBalance">Balance: {{ balance }}</p>`
})


export class BudgetComponent {

  incomes: { description: string; amount: number; }[] = [];
  incomeDescription = '';
  incomeAmount = 0;

  expenses: { description: string; amount: number; }[] = [];
  expenseDescription = '';
  expenseAmount = 0;

  balance = 0;
  showBalance = false;

  addIncome() {
    this.incomes.push({ description: this.incomeDescription, amount: this.incomeAmount });
    this.incomeDescription = '';
    this.incomeAmount = 0;
    console.log(this.incomes)
  }

  addExpense() {
    this.expenses.push({ description: this.expenseDescription, amount: this.expenseAmount });
    this.expenseDescription = '';
    this.expenses;
    console.log(this.expenses)
}

calculateBalance(){
  this.balance = this.incomeAmount + this.expenseAmount;
}
}
