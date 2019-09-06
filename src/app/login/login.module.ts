import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService, getLoginService } from './login.service';
import { TenantService, Tenant } from '../tenant/tenant.service';
import { Client1loginService } from './client1login.service';
import { Client2loginService } from './client2login.service';
import { RouterModule, Routes, Router } from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule
  ],
  providers: [
    {
      provide: LoginService,
      useFactory: getLoginService,
      deps: [TenantService, Client1loginService, Client2loginService]
    }
  ]
})
export class LoginModule {
  constructor(private router: Router, private tenantService: TenantService) {
    // configure the routes.
    let appRoutes: Routes = [];

    if (this.tenantService.getTenant() == Tenant.CLIENT1) {
      console.log("Configuring CLIENT1 Login Components.");
      appRoutes = [
        // your routes here 
      ];
    } else if (this.tenantService.getTenant() == Tenant.CLIENT2) {
      console.log("Configuring CLIENT2 Login Components.");

      appRoutes = [
        // your routes here. 
      ];
    }
    appRoutes.forEach(e => this.router.config.unshift(e));
  }
}