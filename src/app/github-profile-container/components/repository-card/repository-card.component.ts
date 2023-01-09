import { Component, Input } from '@angular/core';
import { GithubRepo } from '../../models/github-repos';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
})
export class RepositoryCardComponent {
  @Input() repoData!: GithubRepo;
}
