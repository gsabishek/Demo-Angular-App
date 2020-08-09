import { HttpClient } from "@angular/common/http";
import { ConfigLoader } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';

export function configFactoryLocal(http: HttpClient): ConfigLoader {
console.log(http)
  // return new ConfigHttpLoader(http, 'assets/config/config.json');
}
