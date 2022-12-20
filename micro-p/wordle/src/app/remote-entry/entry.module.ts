import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { WordleComponent } from '../wordle/wordle.component';
import { WordleDirective} from '../wordle/wordle.directive'

@NgModule({
  declarations: [
    RemoteEntryComponent, 
    WordleComponent,
    WordleDirective
  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
