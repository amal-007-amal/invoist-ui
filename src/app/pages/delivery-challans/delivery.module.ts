import { NgModule } from "@angular/core";
import { ExpenseComponent } from "../expenses/components/expense/expense.component";
import { CreateExpenseComponent } from "../expenses/components/create-expense/create-expense.component";

@NgModule({
    declarations:[
        ExpenseComponent,
        CreateExpenseComponent
    ],
    imports:[],
    exports:[]
})

export class DeliveryChallanModule{}