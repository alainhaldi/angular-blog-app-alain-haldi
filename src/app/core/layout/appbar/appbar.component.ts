import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-appbar',
  templateUrl: 'appbar.component.html',
  styleUrl: 'appbar.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
})
export class AppbarComponent {

  // Authentification
  // constructor(private oauthService: OAuthService) {
  //   this.configure();
  // }

  // authConfig: AuthConfig = {
  //   issuer: 'http://localhost:8080/auth/realms/heroes',
  //   redirectUri: window.location.origin + "/heroes",
  //   clientId: 'spa-heroes',
  //   scope: 'openid profile email offline_access heroes',
  //   responseType: 'code',
  //   // at_hash is not present in id token in older versions of keycloak.
  //   // use the following property only if needed!
  //   // disableAtHashCheck: true,
  //   showDebugInformation: true
  // }
  
  // public login() {
  //   this.oauthService.initLoginFlow();
  // }
  
  // public logoff() {
  //   this.oauthService.logOut();
  // }
  
  // private configure() {
  //   this.oauthService.configure(this.authConfig);
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }

}
