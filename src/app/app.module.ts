import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {IndexGridComponent} from './index-grid/index-grid.component';
import {HttpClientModule} from '@angular/common/http';
import {
  AvatarComponent, BusyIndicatorModule,
  CardModule,
  GridListModule, IconComponent, LayoutGridModule, ListModule, ToolbarModule, ButtonComponent,
  provideTheming, ShellbarModule,
  ThemingModule, InputGroupModule, SwitchComponent
} from '@fundamental-ngx/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TestPageComponent} from './test-page/test-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GigyaScreenSetComponent} from './gigya-screen-set/gigya-screen-set.component';
import {GigyaScreenInstructionsComponent} from './gigya-screen-instructions/gigya-screen-instructions.component';
import {FormsModule} from '@angular/forms';

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
    GigyaScreenInstructionsComponent
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
    FormsModule,

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
