import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundErrorPageComponent } from './pages/not-found-error-page/not-found-error-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [{ path: '', component: HomePageComponent }] },
  { path: '', component: LayoutComponent, children: [{ path: 'contacts', component: ContactsPageComponent }] },
  { path: '404', component: NotFoundErrorPageComponent},  
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
