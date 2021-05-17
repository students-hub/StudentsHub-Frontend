import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { loadMicroApp } from 'qiankun';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vue',
  template: '<div id="vue"></div>'
})
export class VueComponent implements OnInit, OnDestroy {
  microApp = null;

  constructor(private zone: NgZone) {
    this.zone.run(() => {
      this.microApp = loadMicroApp({
        name: 'vue3 app for storage',
        entry: environment.production? '/child/vue/' : '//localhost:3000/child/vue/',
        container: '#vue',
      });
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.microApp.unmount();
  }
}
