import {  Injectable } from "@angular/core";
import { ConfigService } from '@ngx-config/core';

@Injectable()
export class ConfigResourceService {
    url = '';
    constructor(private readonly config: ConfigService) {
    }

    getSetting() {

        return this.config.getSettings();
    }

}