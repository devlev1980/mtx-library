import { NgModule } from '@angular/core';
import { MtxButtonComponent } from './components/mtx-button/mtx-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    MtxButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    MtxButtonComponent
  ]
})
export class ButtonsModule { }
