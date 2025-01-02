import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {IndexGridComponent} from './index-grid/index-grid.component';
import {HttpClientModule} from '@angular/common/http';
import {
  AvatarComponent,
  CardModule,
  FundamentalNgxCoreModule,
  GridListModule,
  provideTheming, ShellbarModule,
  ThemingModule
} from '@fundamental-ngx/core';
import {RouterOutlet} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    IndexGridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    GridListModule,
    CardModule,
    ThemingModule,
    HttpClientModule,
    AvatarComponent,
    ShellbarModule
  ],
  providers: [
    provideTheming({
      defaultTheme: 'sap_horizon'
  }),],

  bootstrap: [AppComponent]
})

export class AppModule { }
