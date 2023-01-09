import { Component, Input } from '@angular/core';
import { GithubProfile } from '../../models/github-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() userData!: GithubProfile;
}
