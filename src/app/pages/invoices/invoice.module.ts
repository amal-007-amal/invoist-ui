import { NgModule } from "@angular/core";
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { InvoiceComponent } from "./components/invoice/invoice.component";

@NgModule({
    declarations:[
    CreateInvoiceComponent,
    InvoiceComponent
  ],
    imports:[],
    exports:[]
})

export class InvoiceModule{}