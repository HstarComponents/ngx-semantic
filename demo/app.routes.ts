import { RouterConfig, provideRouter }  from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RatingComponent } from './components/rating/rating.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ModalComponent } from './components/modal/modal.component';
import { PagerComponent } from './components/pager/pager.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TagsComponent } from './components/tags/tags.component';

import { AlertComponent } from './services/alert/alert.component';
import { MaskComponent } from './services/mask/mask.component';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'components/modal', component: ModalComponent },
  { path: 'components/pager', component: PagerComponent },
  { path: 'components/progress', component: ProgressComponent },
  { path: 'components/rating', component: RatingComponent },
  { path: 'components/tabset', component: TabsetComponent },
  { path: 'components/tags', component: TagsComponent },

  { path: 'services/alert', component: AlertComponent },
  { path: 'services/mask', component: MaskComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];