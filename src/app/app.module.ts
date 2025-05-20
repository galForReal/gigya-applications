import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {IndexGridComponent} from './index-grid/index-grid.component';
import {HttpClientModule} from '@angular/common/http';
import {
  AvatarComponent,
  BusyIndicatorModule,
  CardModule,
  GridListModule,
  IconComponent,
  LayoutGridModule,
  ListModule,
  ToolbarModule,
  ButtonComponent,
  provideTheming,
  ShellbarModule,
  ThemingModule,
  InputGroupModule,
  SwitchComponent,
  PaginationModule,
  FormModule,
  MessageStripModule,
  MessageToastModule,
} from '@fundamental-ngx/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TestPageComponent} from './test-page/test-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GigyaScreenSetComponent} from './gigya-screen-set/gigya-screen-set.component';
import {GigyaScreenInstructionsComponent} from './gigya-screen-instructions/gigya-screen-instructions.component';
import {FormsModule} from '@angular/forms';
import {UrlViewerComponent} from './url-viewer/url-viewer.component';
import {SafeUrlPipe} from './pipes/safe-url-pipe.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'testPage', component:TestPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestPageComponent,
    IndexGridComponent,
    GigyaScreenSetComponent,
    GigyaScreenInstructionsComponent,
    UrlViewerComponent
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
    ListModule,
    LayoutGridModule,
    BusyIndicatorModule,
    ToolbarModule,
    InputGroupModule,
    ButtonComponent,
    SwitchComponent,
    PaginationModule,
    FormsModule,
    FormModule,
    MessageStripModule,
    SafeUrlPipe,
    MessageToastModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideTheming({
      defaultTheme: 'sap_horizon'
    }),],
  exports: [
    IndexGridComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
