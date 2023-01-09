import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userToSearch = '';
  searchUser(event: string) {
    this.userToSearch = event;
  }
}
