import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent, ModalComponent,
  PagerComponent, RatingComponent,
  TagsComponent, ProgressComponent,
  TabsetComponent, NotfoundComponent
} from './app';

function loadModule(): any {
  return new Promise(resolve => {
    // (require as any).ensure([], require => {
    //   let mod = require('./modules/lazy-load/lazy-load.module').LazyLoadModule;
    //   console.log(mod);
    //   resolve(mod);
    resolve('');
    // });
  });
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components/modal', component: ModalComponent },
  { path: 'components/pager', component: PagerComponent },
  { path: 'components/rating', component: RatingComponent },
  { path: 'components/tags', component: TagsComponent },
  { path: 'components/progress', component: ProgressComponent },
  { path: 'components/tabset', component: TabsetComponent },
  { path: 'lazy', loadChildren: loadModule },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404', data: {} }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);