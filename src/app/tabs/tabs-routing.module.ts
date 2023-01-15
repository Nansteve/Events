import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
    path: 'home',
    loadChildren: () => import('../views/home/home.module').then( m => m.HomePageModule)},
    {
      path: 'event-list',
      loadChildren: () => import('../views/event-list/event-list.module').then( m => m.EventListPageModule)
    },
    {
      path: 'venue-list',
      loadChildren: () => import('../views/venue-list/venue-list.module').then( m => m.VenueListPageModule)
    },
    {
      path: 'about',
      loadChildren: () => import('../views/about/about.module').then( m => m.AboutPageModule)
    },
    {path:'', redirectTo:'home', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
