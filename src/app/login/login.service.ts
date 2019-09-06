import { TenantService, Tenant } from "../tenant/tenant.service";
import { Client1loginService } from './client1login.service';
import { Client2loginService } from './client2login.service';

export function getLoginService(
  tenantService: TenantService,
  client1LoginService: Client1loginService,
  Client2loginService: Client2loginService
): LoginService {
  if (tenantService.getTenant() === Tenant.CLIENT1) {
    return client1LoginService;
  } else if (tenantService.getTenant() === Tenant.CLIENT2) {
    return Client2loginService;
  }

  throw new Error("Unknown tenant for login service");
}


export abstract class LoginService {
  constructor() { }
  abstract login(username: string, password: string): boolean;
}


