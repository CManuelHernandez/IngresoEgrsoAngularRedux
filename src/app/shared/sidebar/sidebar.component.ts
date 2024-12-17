import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private AuthService: AuthService, private router: Router) {}

  logout() {
    this.AuthService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
