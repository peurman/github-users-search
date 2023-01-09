import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() userSearched: EventEmitter<string> = new EventEmitter();

  OnChange(event: Event): void {
    this.userSearched.emit((event.target as HTMLInputElement).value);
  }
}
