import { Modal } from './modal/modal.component';
import { ModalContent } from './modal/content.directive';
import { ModalHeader } from './modal/header.directive';
import { ModalActions } from './modal/actions.directive';

import { Pager } from './pager/pager.component';

import { Popup } from './popup/popup.directive';

import { Progress } from './progress/progress.component';

import { Rating } from './rating/rating.component';

import { Tab } from './tabset/tab.component';
import { Tabset } from './tabset/tabset.component';

import { Tags } from './tags/tags.component';

export const NG2_SEMANTIC_COMPONENTS = [
  Modal, ModalActions, ModalContent, ModalHeader,
  Pager,
  Popup,
  Progress,
  Rating,
  Tab, Tabset,
  Tags
];