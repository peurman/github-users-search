import { Component, Input } from '@angular/core';
import { GithubFollower } from '../../models/github-follower';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.scss'],
})
export class FollowerCardComponent {
  @Input() followerData!: GithubFollower;
}
