import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer} from './assets/reducers/users.reducer';
import { HomeComponent } from './components/home/home.component';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
const appRoutes=[
  {path:'users',component:ContainerComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ContainerComponent,
    HomeComponent,
    HomeInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule, StoreModule.forRoot({usersStore:UserReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
