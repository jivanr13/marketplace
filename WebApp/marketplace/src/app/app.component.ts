import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BlockUIService} from './core/services/block-ui.service';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marketplace';
  blocked;
  blockUIMessage = '';

  constructor(private blockUIService: BlockUIService,
              private cdRef: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(): void {
    this.blocked = false;
    this.blockUIService.changeStatus.subscribe(data => {
      this.blocked = data.status;
      this.blockUIMessage = data.message;
      this.cdRef.detectChanges();
    });

    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.blockUIService.startBlock('...');
      } else if (event instanceof RouteConfigLoadEnd) {
        this.blockUIService.endBlock();
      }
    });
  }
}
