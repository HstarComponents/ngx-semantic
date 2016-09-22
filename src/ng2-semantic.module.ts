import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NG2_SEMANTIC_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [...NG2_SEMANTIC_COMPONENTS],
  exports: [...NG2_SEMANTIC_COMPONENTS, CommonModule, FormsModule],
  providers: []
})
export class Ng2SemanticComponentsModule {

};