import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { FileListComponent } from './file-list/file-list.component';
import { FeedComponent } from './feed/feed.component';
import { FileCardComponent } from './file-card/file-card.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { DirViewComponent } from './dir-view/dir-view.component';
import { ImgViewComponent } from './img-view/img-view.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FileListComponent,
    FeedComponent,
    FileCardComponent,
    CodeViewComponent,
    DirViewComponent,
    ImgViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
