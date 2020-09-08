import { Component, OnInit } from '@angular/core';
import { faHome, faFolder, faEnvelope, faLaptop, faUnlock, faLock } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    faHome = faHome;
    faProjects = faFolder;
    faContact = faEnvelope;
    faDashboard = faLaptop;
    faLogin = faUnlock;
    faLogout = faLock;

    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }

    check() {
        return this.auth.authCheck();
    }

    logout() {
        this.auth.logout();
    }
}
