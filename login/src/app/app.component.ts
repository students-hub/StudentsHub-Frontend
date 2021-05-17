import { AfterViewInit, Component, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'StudentsHub-Login';
  hasViewInit = false;

  constructor(
    private zone: NgZone,
    private router: Router
  ) {}

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log(event);
  }

  ngAfterViewInit(): void {
    if (!this.hasViewInit) {
      this.hasViewInit = true;
      // start();
    }
  }
}
