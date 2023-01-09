import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GithubProfile } from '../models/github-profile';
import { GithubRepos } from '../models/github-repos';
import { GithubFollower } from '../models/github-follower';

const headers = {
  Authorization:
    'Bearer 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',
  Accept: 'application/vnd.github+json',
};
const reposPerPage = 100;
const followersPerPage = 100;

@Injectable()
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getStates(nameSearched: string): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(
      `https://api.github.com/users/${nameSearched}`,
      {
        headers,
      }
    );
  }
  getRepos(userSearched: string, page: number): Observable<GithubRepos> {
    return this.http.get<GithubRepos>(
      `https://api.github.com/users/${userSearched}/repos?page=${page}&per_page=${reposPerPage}&sort=updated`,
      {
        headers,
      }
    );
  }
  getFollowers(userSearched: string, page: number): Observable<GithubFollower> {
    return this.http.get<GithubFollower>(
      `https://api.github.com/users/${userSearched}/followers?page=${page}&per_page=${followersPerPage}&sort=updated`,
      {
        headers,
      }
    );
  }
}
