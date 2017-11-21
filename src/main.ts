import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {LoggerService} from "./app/util/logger.service";
// {APP_ROUTER_PROVIDERS} from './app/app.routes';

platformBrowserDynamic().bootstrapModule(AppModule );
