import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  userName: string = '';
  userInitial: string = '';

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName') || 'Utilisateur';
    this.userInitial = this.userName.charAt(0).toUpperCase();
  }
}
