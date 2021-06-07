import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { loadMicroApp } from 'qiankun';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-react',
  template: '<div id="react"></div>'
})
export class ReactComponent implements OnInit, OnDestroy {
  microApp = null;

  constructor(private zone: NgZone) {
    this.zone.run(() => {
      this.microApp = loadMicroApp({
        name: 'react app for dashboard',
        entry: environment.production? '/child/vue/' : '//localhost:3000/child/vue/',
        container: '#react',
      });
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.microApp.unmount();
  }
}
