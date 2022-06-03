import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Routes} from '../../data/routes/routes';
import {BlockUIService} from '../../core/services/block-ui.service';
import {AuthUserSettingsService} from '../../core/services/auth-user-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nombreEmpresa = '';
  nombreServidor = '';
  fechaEmpresa: Date = null;

  constructor(private router: Router,
              private blockUIService: BlockUIService,
              public authUserSettingsService: AuthUserSettingsService) {
  }

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.router.navigate([`${Routes.LOGIN}`]);
  }

}
