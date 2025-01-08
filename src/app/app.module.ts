import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {IndexGridComponent} from './index-grid/index-grid.component';
import {HttpClientModule} from '@angular/common/http';
import {
  AvatarComponent,
  CardModule, FeedListComponent,
  FundamentalNgxCoreModule,
  GridListModule, IconComponent, ListModule,
  provideTheming, ShellbarModule,
  ThemingModule
} from '@fundamental-ngx/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TestPageComponent} from './test-page/test-page.component';
import {HomePageComponent} from './home-page/home-page.component';

//  {path:'', component:AppComponent},
const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'testPage/:id', component:TestPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    IndexGridComponent,
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
    ShellbarModule,
    IconComponent,
    RouterModule.forRoot(routes),
    ListModule
  ],
  providers: [
    provideTheming({
      defaultTheme: 'sap_horizon'
    }),],
  exports: [
    IndexGridComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
