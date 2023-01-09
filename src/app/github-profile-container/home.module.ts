import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';
import { FollowerCardComponent } from './components/follower-card/follower-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    RepositoryCardComponent,
    FollowerCardComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [HomeComponent],
})
export class HomeModule {}
