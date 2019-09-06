import { Component, OnInit, HostBinding } from "@angular/core";
import { Tenant, TenantService } from './tenant/tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.skins.less']
})
export class AppComponent implements OnInit {
 
  title = 'multi-tenant-angular';
 
  constructor(private tenantService: TenantService){
  }

  @HostBinding("class.theme-client1") public client1Theme: boolean;
  @HostBinding("class.theme-client2") public client2Theme: boolean;

  ngOnInit() {
    this.enableThemes();
  }

  get tenant() : string {
    return this.tenantService.getTenant();
  }

  enableThemes() {
    this.client1Theme = this.tenantService.getTenant() === Tenant.CLIENT1;
    this.client2Theme = this.tenantService.getTenant() === Tenant.CLIENT2;
  }
}
