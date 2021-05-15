import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerMicroApps, start } from 'qiankun';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerMicroApps([
  {
    name: 'vue3 app for storage',
    entry: environment.production? '/child/vue/' : '//localhost:3000/child/vue/',
    container: '#vue',
    activeRule: '/vue'
  },
]);

start({prefetch: true});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
