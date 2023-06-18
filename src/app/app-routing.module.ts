import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
  },
  {
    path:'customers',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/customers/customers.module').then(c =>c.CustomersModule)
  },
  {
    path:'vendors-suppliers',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/vendors-suppliers/vendors.module').then(vs =>vs.VendorsSupplierModule)
  },
  {
    path:'reports',
    pathMatch:'full',
    loadChildren:()=>import('../app/pages/reports/reports.module').then(r =>r.ReportsModule)
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'login',
    loadChildren:()=>import('./pages/authentication/authentication.module').then(a => a.AuthenticationModule)
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true,
      preloadingStrategy:PreloadAllModules,
    }
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
