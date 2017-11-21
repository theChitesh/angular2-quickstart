import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AccountsList} from './account/accounts_list.component';
import {AccountForm} from './account/account_form.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from  './home/home.component';
import {AccountComponent} from  './account/account.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path:'accounts',component:AccountComponent}
/*
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },*/
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
   ],
  declarations: [ AppComponent,AccountsList,AccountForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
