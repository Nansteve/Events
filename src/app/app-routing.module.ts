import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./views/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./views/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'venue-list',
    loadChildren: () => import('./views/venue-list/venue-list.module').then( m => m.VenueListPageModule)
  },
  {
    path: 'detail-event',
    loadChildren: () => import('./views/detail-event/detail-event.module').then( m => m.DetailEventPageModule)
  },
  {
    path: 'detail-venue',
    loadChildren: () => import('./views/detail-venue/detail-venue.module').then( m => m.DetailVenuePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
