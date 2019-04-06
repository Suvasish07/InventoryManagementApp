import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
const routes: Routes = [
{ path: '', component: UsermanagementComponent },
  { path: 'product', component: ProductmanagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
