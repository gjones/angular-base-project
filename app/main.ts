// Modules
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Components
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
