import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthorizationGuard } from './core/auth/authorization.guard';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PartialLayoutComponent } from './partial/partial-layout/partial-layout.component';
import { WebLayoutComponent } from './web/web-layout/web-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: WebLayoutComponent,  loadChildren: () => import('./web/web-layout/web-layout.module').then(m => m.WebLayoutModule) },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthorizationGuard],
    component: PartialLayoutComponent,
    loadChildren: () => import('./partial/partial-layout/partial-layout.module').then(m => m.PartialLayoutModule)
  },
  // { path: 'defence-erp', loadChildren: () => import('./web/industries/defence/defence-erp/defence-erp.module').then(m => m.DefenceErpModule) },
  // { path: 'vehicle-erp', loadChildren: () => import('./web/industries/vehicle-tracking/vehicle-erp/vehicle-erp.module').then(m => m.VehicleErpModule) },
  
 
  
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
