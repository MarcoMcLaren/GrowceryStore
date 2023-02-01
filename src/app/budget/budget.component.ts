import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})


export class BudgetComponent {
 income = 0;
 expenses = 0;

  incomeArray = [];
  expensesArray = [];
 

//   expenses: { description: string; amount: number; }[] = [];
//   expenseDescription = '';
//   expenseAmount = 0;

//   balance = 0;
//   showBalance = false;

//   addIncome() {
//     this.incomes.push({ description: this.incomeDescription, amount: this.incomeAmount });
//     this.incomeDescription = '';
//     this.incomeAmount = 0;
//     console.log(this.incomes)
//   }

//   addExpense() {
//     this.expenses.push({ description: this.expenseDescription, amount: this.expenseAmount });
//     this.expenseDescription = '';
//     this.expenses;
//     console.log(this.expenses)
// }

// calculateBalance(){
//   let totalIncome = 0;
//   let totalExpense = 0;
//   for (let income of this.incomes) {
//     totalIncome += income.amount;
//   }
//   for (let expense of this.expenses) {
//     totalExpense += expense.amount;
//   }
//   this.balance = totalIncome - totalExpense;
//   this.showBalance = true;
// }
}
