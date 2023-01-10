import { Component } from '@angular/core';

import { GithubApiService } from '../services/github-api.service';

import { GithubProfile } from '../models/github-profile';
import { GithubRepo } from '../models/github-repos';
import { GithubFollower } from '../models/github-follower';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private githubService: GithubApiService) {}

  userProfile!: GithubProfile;
  tempUserRepos: GithubRepo[] = [];
  userRepos: GithubRepo[] = [];
  tempUserFollowers: GithubFollower[] = [];
  userFollowers: GithubFollower[] = [];
  errorMessage = '';
  pages = 1;
  reposPerPage = 100;
  followersPerPage = 100;
  totalStars = 0;

  searchUser(event: string) {
    this.githubService.getProfile(event).subscribe(
      data => {
        (this.userProfile = data),
          (this.errorMessage = ''),
          this.getRepositories(
            this.userProfile.login,
            this.userProfile.public_repos
          );
        this.getFollowers(this.userProfile.login, this.userProfile.followers);
      },
      error => {
        this.errorMessage = error.status;
        alert(
          `Sorry, we cannot get the profile (error status: ${error.status}), try with other username`
        );
      }
    );
  }

  getRepositories(user: string, reposLength: number) {
    this.userRepos = [];
    this.totalStars = 0;
    this.pages = 1;
    console.log('username: ', user, '- total repos: ', reposLength);
    if (reposLength > this.reposPerPage)
      this.pages = Math.ceil(reposLength / this.reposPerPage);
    if (this.pages > 1) {
      for (let index = 1; index <= this.pages; index++) {
        this.githubService.getRepos(user, index).subscribe(
          data => {
            this.userRepos = this.userRepos.concat(data);
            console.log('Repo length: ', this.userRepos.length);
            if (this.userRepos.length === reposLength) {
              this.totalStars = this.userRepos.reduce((acum, el) => {
                return acum + el.stargazers_count;
              }, 0);
              console.log('Total Stars: ', this.totalStars);
            }
          },
          error => {
            this.errorMessage = error.status;
            alert(
              `Sorry, we cannot get the repos (error status: ${error.status}), try later`
            );
          }
        );
      }
    } else
      this.githubService.getRepos(user, 1).subscribe(
        data => {
          this.userRepos = data;
          console.log('Repo length: ', this.userRepos.length);
          this.totalStars = this.userRepos.reduce((acum, el) => {
            return acum + el.stargazers_count;
          }, 0);
          console.log('Total Stars: ', this.totalStars);
        },
        error => {
          this.errorMessage = error.status;
          alert(
            `Sorry, we cannot get the repos (error status: ${error.status}), try later`
          );
        }
      );
  }

  getFollowers(user: string, followersLength: number) {
    this.userFollowers = [];
    this.pages = 1;
    console.log('username: ', user, '- total followers: ', followersLength);
    if (followersLength > this.followersPerPage)
      this.pages = Math.ceil(followersLength / this.followersPerPage);
    if (this.pages > 1) {
      for (let index = 1; index <= this.pages; index++) {
        this.githubService.getFollowers(user, index).subscribe(
          data => {
            this.userFollowers = this.userFollowers.concat(data);
            console.log('Follower length: ', this.userFollowers.length);
          },
          error => {
            this.errorMessage = error.status;
            alert(
              `Sorry, we cannot get the repos (error status: ${error.status}), try later`
            );
          }
        );
      }
    } else
      this.githubService.getFollowers(user, 1).subscribe(
        data => {
          this.userFollowers = data;
          console.log('Follower length: ', this.userFollowers.length);
        },
        error => {
          this.errorMessage = error.status;
          alert(
            `Sorry, we cannot get the repos (error status: ${error.status}), try later`
          );
        }
      );
  }
}
