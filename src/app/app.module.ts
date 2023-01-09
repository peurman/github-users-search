import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeModule } from './github-profile-container/home.module';

import { GithubApiService } from './github-profile-container/services/github-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [GithubApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
