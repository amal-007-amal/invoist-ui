import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/dashboard/dashboard.module').then(d =>d.DashboardModule)
  },
  {
    path:'estimates',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/estimates/estimates.module').then(e =>e.EstimatesModule)
  },
  {
    path:'invoices',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/invoices/invoice.module').then(i =>i.InvoiceModule)
  },
  {
    path:'delivery-challens',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/delivery-challans/delivery.module').then(dc =>dc.DeliveryChallanModule)
  },
  {
    path:'expenses',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/expenses/expense.module').then(ex =>ex.ExpenseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
